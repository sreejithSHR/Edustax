import { useState } from "react";
import { Module, ModuleComponent } from "@prisma/client"; // Import types from Prisma client

export default function ModuleEditor({
  module,
  onSave,
}: {
  module?: Module & { components: ModuleComponent[] }; // Include components in the module type
  onSave: (module: Module, components: ModuleComponent[]) => void;
}) {
  // State for module fields
  const [name, setName] = useState(module?.name || ""); // Use `name` instead of `title`
  const [description, setDescription] = useState(module?.description || "");

  // State for module components
  const [videoUrl, setVideoUrl] = useState(
    module?.components.find((c) => c.type === "video")?.contentUrl || "",
  );
  const [transcript, setTranscript] = useState(
    (module?.components.find((c) => c.type === "text")?.metadata as { transcript: string })?.transcript || "",
  );
  const [thumbnailUrl, setThumbnailUrl] = useState(
    module?.components.find((c) => c.type === "image")?.contentUrl || "",
  );

  const handleSave = () => {
    // Create the module object
    const newModule: Module = {
      id: module?.id || Date.now().toString(), // Generate a unique ID
      name, // Use `name` instead of `title`
      description,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      siteId: module?.siteId || "", // Ensure siteId is provided
    };

    // Create the module components
    const components: ModuleComponent[] = [
      {
        id: Date.now().toString(), // Generate a unique ID
        type: "video",
        contentUrl: videoUrl,
        metadata: null,
        moduleId: newModule.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: Date.now().toString() + "-text", // Generate a unique ID
        type: "text",
        contentUrl: null,
        metadata: { transcript }, // Store transcript in metadata
        moduleId: newModule.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: Date.now().toString() + "-image", // Generate a unique ID
        type: "image",
        contentUrl: thumbnailUrl,
        metadata: null,
        moduleId: newModule.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    // Call the onSave function with the module and components
    onSave(newModule, components);
  };

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Module Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Thumbnail URL"
        value={thumbnailUrl}
        onChange={(e) => setThumbnailUrl(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Video URL"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <textarea
        placeholder="Transcript"
        value={transcript}
        onChange={(e) => setTranscript(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button
        onClick={handleSave}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Save Module
      </button>
    </div>
  );
}