import Link from "next/link";
import { notFound } from "next/navigation";
import BlurImage from "@/components/blur-image";
import { placeholderBlurhash, toDateString } from "@/lib/utils";
import BlogCard from "@/components/blog-card";
import { getPostsForSite, getSiteData } from "@/lib/fetchers";
import Image from "next/image";
import CreateCTAButton from "@/components/CTAbutton";

export default async function SiteHomePage({
  params,
}: {
  params: { domain: string };
}) {
  const [data, posts] = await Promise.all([
    getSiteData(params.domain),
    getPostsForSite(params.domain),
  ]);

  if (!data) {
    notFound();
  }

  return (
    <>
      <div className="mb-20 w-full bg-gradient-to-r">
        {posts.length > 0 ? (
          <div className="mx-auto w-full max-w-screen-xl md:mb-28 lg:w-5/6">
            <div className="group relative mx-auto h-15 w-full overflow-hidden  lg:rounded-xl">
              <h1 className="   text-center items-center border-neutral-700 font-extrabold text-8xl bg-gradient-to-r from-slate-300 via-gray-400 to-zinc-300 bg-clip-text text-transparent ">
            Welcome To {data.name} Courses
              </h1>
              <p className="mt-8 text-center items-center  dark:text-white ">
              {data.description}
              </p>
              <div className="mt-4 flex flex-col items-center">
              <CreateCTAButton />
              </div>
            </div>
            
            <Link href={`/${posts[0].slug}`}>
            <h1 className="mt-10 text-center items-center font-extrabold text-5xl dark:text-white  ">
            Check out our courses
              </h1>
              <div className="group relative mt-9 mx-auto h-80 w-full overflow-hidden sm:h-150 lg:rounded-xl">
                <BlurImage
                  alt={posts[0].title ?? ""}
                  blurDataURL={posts[0].imageBlurhash ?? placeholderBlurhash}
                  className="h-full w-full object-cover group-hover:scale-105 group-hover:duration-300"
                  width={1300}
                  height={630}
                  placeholder="blur"
                  src={posts[0].image ?? "/placeholder.png"}
                />
              </div>
              <div className="mx-auto mt-10 w-5/6 lg:w-full">
                <h2 className="my-10 font-title text-4xl dark:text-white md:text-6xl">
                  {posts[0].title}
                </h2>
                <p className="w-full text-base dark:text-white md:text-lg lg:w-2/3">
                  {posts[0].description}
                </p>
                <div className="flex w-full items-center justify-start space-x-4">
                  <div className="relative h-8 w-8 flex-none overflow-hidden rounded-full">
                    {data.user?.image ? (
                      <BlurImage
                        alt={data.user?.name ?? "User Avatar"}
                        width={100}
                        height={100}
                        className="h-full w-full object-cover"
                        src={data.user?.image}
                      />
                    ) : (
                      <div className="absolute flex h-full w-full select-none items-center justify-center bg-stone-100 text-4xl text-stone-500">
                        ?
                      </div>
                    )}
                  </div>
                  <p className="ml-3 inline-block whitespace-nowrap align-middle text-sm font-semibold dark:text-white md:text-base">
                    {data.user?.name}
                  </p>
                  <div className="h-6 border-l border-stone-600 dark:border-stone-400" />
                  <p className="m-auto my-5 w-10/12 text-sm font-light text-stone-500 dark:text-stone-400 md:text-base">
                    {toDateString(posts[0].createdAt)}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <Image
              alt="missing post"
              src="https://illustrations.popsy.co/gray/success.svg"
              width={400}
              height={400}
              className="dark:hidden"
            />
            <Image
              alt="missing post"
              src="https://illustrations.popsy.co/white/success.svg"
              width={400}
              height={400}
              className="hidden dark:block"
            />
            <p className="font-title text-2xl text-stone-600 dark:text-stone-400">
              No posts yet.
            </p>
          </div>
        )}
      </div>

      {posts.length > 1 && (
        <div className="mx-5 mb-20 max-w-screen-xl lg:mx-24 2xl:mx-auto">
          <h2 className="mb-10 font-title text-4xl dark:text-white md:text-5xl">
            Explore More
          </h2>
          <div className="grid w-full grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 xl:grid-cols-3">
            {posts.slice(1).map((metadata, index) => (
              <BlogCard key={index} data={metadata} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
