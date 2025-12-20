# LMS Extension Summary

## Architecture

### Tenant Isolation
- All LMS models include `siteId` for strict tenant scoping
- Student accounts are per-tenant (same email can exist across tenants)
- Middleware enforces role separation and tenant boundaries

### Roles & Routes

**Admin (app.domain.com)**
- Existing User model via NextAuth (GitHub OAuth)
- Create/edit/publish courses and lessons
- Access: `/courses`, `/lessons`

**Student (slug.domain.com)**
- New Student model with email/password auth
- Cookie-based sessions (`student-session`)
- Access: `/login`, `/signup`, `/courses`, `/lessons`
- Blocked from admin routes

### Models (Prisma)

```
Student (tenant-scoped)
├── email, passwordHash, name, siteId
├── enrollments
├── progress
└── sessions

Course (tenant-scoped)
├── title, slug, description, published, siteId
└── lessons

Lesson
├── title, content, videoUrl, order
└── courseId

Enrollment
├── studentId, courseId (unique pair)

Progress
├── studentId, lessonId, completed, completedAt (unique pair)

StudentSession
├── studentId, token, expires
```

## Key Files

**Auth**
- `lib/student-auth.ts` - Student signup/signin/session management
- `lib/auth.ts` - Unchanged (admin auth)

**Actions**
- `lib/lms-actions.ts` - All course/lesson/enrollment/progress server actions

**Middleware**
- `middleware.ts` - Role-based routing, tenant injection, session checks

**Admin UI**
- `app/app/(dashboard)/courses/*` - Course CRUD
- `app/app/(dashboard)/lessons/*` - Lesson editor

**Student UI**
- `app/[domain]/login` - Student login
- `app/[domain]/signup` - Student signup
- `app/[domain]/courses` - Browse/enrolled courses
- `app/[domain]/courses/[slug]` - Course detail + enroll
- `app/[domain]/lessons/[id]` - Lesson viewer + mark complete

## Publishing Flow

1. Admin creates course (draft by default)
2. Admin adds lessons with content/video
3. Admin publishes course
4. Published courses appear to students
5. Students enroll
6. Students progress through lessons
7. Progress persists across edits

## Security

- Student passwords hashed with bcryptjs
- Sessions validated per request
- All queries tenant-scoped via siteId
- Middleware blocks cross-role access
- Enrollment checked before lesson access
- Published flag enforced for student visibility

## Setup

```bash
npm install
npm run dev
```

Visit:
- `app.localhost:3000` - Admin dashboard
- `<tenant>.localhost:3000` - Student LMS
