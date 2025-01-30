import { useState } from "react";

import { Assessment, ModuleComponent } from "@prisma/client"; // Import types from Prisma client

export default function AssessmentEditor({
  assessment,
  onSave,
}: {
  assessment?: Assessment;
  onSave: (assessment: Assessment) => void;
}) {
  const [type, setType] = useState<"MCQ" | "FileUpload">(
    assessment?.type || "MCQ",
  );
  const [question, setQuestion] = useState(assessment?.question || "");
  const [options, setOptions] = useState<string[]>(assessment?.options || []);
  const [correctAnswer, setCorrectAnswer] = useState(
    assessment?.correctAnswer || "",
  );
  const [filePrompt, setFilePrompt] = useState(assessment?.filePrompt || "");

  const handleSave = () => {
    const newAssessment: Assessment = {
      id: assessment?.id || Date.now().toString(), // Generate a unique ID
      type,
      question: type === "MCQ" ? question : undefined,
      options: type === "MCQ" ? options : undefined,
      correctAnswer: type === "MCQ" ? correctAnswer : undefined,
      filePrompt: type === "FileUpload" ? filePrompt : undefined,
    };
    onSave(newAssessment);
  };

  return (
    <div className="space-y-4">
      <select
        value={type}
        onChange={(e) => setType(e.target.value as "MCQ" | "FileUpload")}
        className="w-full p-2 border rounded"
      >
        <option value="MCQ">MCQ</option>
        <option value="FileUpload">File Upload</option>
      </select>
      {type === "MCQ" ? (
        <>
          <input
            type="text"
            placeholder="Question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <textarea
            placeholder="Options (one per line)"
            value={options.join("\n")}
            onChange={(e) => setOptions(e.target.value.split("\n"))}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Correct Answer"
            value={correctAnswer}
            onChange={(e) => setCorrectAnswer(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </>
      ) : (
        <textarea
          placeholder="File Upload Prompt"
          value={filePrompt}
          onChange={(e) => setFilePrompt(e.target.value)}
          className="w-full p-2 border rounded"
        />
      )}
      <button
        onClick={handleSave}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Save Assessment
      </button>
    </div>
  );
}