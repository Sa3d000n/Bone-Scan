import { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import {
  MdOutlineImageSearch,
  MdCloudUpload,
  MdOutlineAnalytics,
  MdRestartAlt,
} from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function TumorDetectionForm() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const selectedFile = acceptedFiles[0];
      setFile(selectedFile);

      // Create preview URL for the image
      const previewUrl = URL.createObjectURL(selectedFile);
      setPreview(previewUrl);

      setError(null);
    }
  }, []);

  // Clean up preview URL when component unmounts or file changes
  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg"],
    },
    maxFiles: 1,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setError("Please upload an image");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("image", file);
      formData.append("age", age);
      formData.append("gender", gender);

      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Server error");
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError("An error occurred: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    if (preview) {
      URL.revokeObjectURL(preview);
    }
    setFile(null);
    setPreview(null);
    setResult(null);
    setAge("");
    setGender("");
    setError(null);
  };

  return (
    <section className="bone-cancer-detection">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:items-center md:gap-8">
          <div>
            <div className="max-w-lg md:max-w-none">
              <h1 className="text-4xl sm:text-2xl font-semibold text-gray-900 leading-tight sm:leading-normal text-center sm:text-left">
                Bone Cancer <br /> Detection <br /> Analysis
              </h1>

              <p className="mt-9 text-black font-semibold text-lg leading-7">
                Upload your X-ray, CT, or MRI scan and receive <br /> instant,
                AI-powered analysis for bone cancer <br /> detection.
              </p>

              {!file && (
                <div
                  {...getRootProps()}
                  className="group relative inline-flex items-center overflow-hidden rounded-sm bg-indigo-600 px-8 py-3 text-white focus:outline-none mt-9 cursor-pointer"
                >
                  <span className="absolute -end-full transition-all group-hover:end-4">
                    <MdOutlineImageSearch size={20} />
                  </span>

                  <span className="text-sm font-medium transition-all group-hover:me-4">
                    Upload Your Scan
                  </span>
                  <input {...getInputProps()} />
                </div>
              )}

              {preview && (
                <div className="mt-9">
                  <p className="text-gray-700 font-medium text-sm mb-3">
                    Uploaded Scan:
                  </p>
                  <div className="relative rounded-lg overflow-hidden border-4 border-indigo-100 shadow-md max-w-xs">
                    <img
                      src={preview}
                      alt="Uploaded scan preview"
                      className="w-full h-auto object-cover"
                    />
                    <button
                      onClick={resetForm}
                      className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
                      title="Remove image"
                    >
                      <MdRestartAlt size={20} className="text-indigo-600" />
                    </button>
                  </div>
                </div>
              )}

              {result && (
                <div className="mt-6">
                  <h3 className="font-semibold text-xl text-gray-900">
                    Analysis Results
                  </h3>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">
                        Tumor Type:
                      </span>
                      <span className="text-gray-900 font-semibold">
                        {result.tumor_type}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">
                        Severity:
                      </span>
                      <span
                        className={`font-semibold ${
                          result.tumor_stage === "Stage 0"
                            ? "text-green-600"
                            : result.tumor_stage === "Stage 1"
                            ? "text-yellow-600"
                            : result.tumor_stage === "Stage 2"
                            ? "text-orange-600"
                            : "text-red-600"
                        }`}
                      >
                        {result.tumor_stage}
                      </span>
                    </div>
                    <div className="text-gray-500 text-xs mt-2">
                      Patient:{" "}
                      {result.patient_data.age
                        ? result.patient_data.age + " years old"
                        : "Age not provided"}
                      ,
                      {result.patient_data.gender
                        ? " " + result.patient_data.gender
                        : " Gender not provided"}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            {!result ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Patient Information
                  </h2>

                  {!file ? (
                    <div
                      {...getRootProps()}
                      className="border-2 border-dashed rounded-lg p-8 cursor-pointer text-center transition-colors border-indigo-300 hover:bg-indigo-50"
                    >
                      <input {...getInputProps()} />
                      <MdCloudUpload className="mx-auto text-indigo-500 text-4xl mb-3" />
                      <p className="text-gray-800 font-medium">
                        Drag & drop your scan here
                      </p>
                      <p className="text-gray-500 text-sm mt-2">
                        or click to browse files
                      </p>
                      <p className="text-xs text-gray-400 mt-4">
                        Supported formats: JPEG, PNG
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <p className="text-green-600 font-medium text-sm">
                          ✓ Image uploaded: {file.name}
                        </p>
                        <span className="text-xs text-gray-500">
                          {Math.round(file.size / 1024)} KB
                        </span>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Age
                        </label>
                        <input
                          type="number"
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                          className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Enter patient age"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Gender
                        </label>
                        <select
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                          className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        >
                          <option value="">Select gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {error && (
                    <div className="text-red-500 text-sm p-3 bg-red-50 rounded-md">
                      {error}
                    </div>
                  )}
                </div>

                {file && (
                  <button
                    type="submit"
                    disabled={loading}
                    className="group relative w-full inline-flex items-center justify-center overflow-hidden rounded-md bg-indigo-600 px-8 py-3 text-white focus:outline-none"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <AiOutlineLoading3Quarters className="animate-spin mr-2" />
                        Analyzing scan...
                      </span>
                    ) : (
                      <>
                        <span className="absolute -end-full transition-all group-hover:end-4">
                          <MdOutlineAnalytics size={20} />
                        </span>
                        <span className="text-sm font-medium transition-all group-hover:me-4">
                          Analyze Scan
                        </span>
                      </>
                    )}
                  </button>
                )}
              </form>
            ) : (
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Analysis Complete
                </h3>
                <p className="text-gray-600 mb-6">
                  Your scan has been successfully analyzed by our AI system
                </p>

                <button
                  onClick={resetForm}
                  className="group relative inline-flex items-center overflow-hidden rounded-md bg-indigo-600 px-8 py-3 text-white focus:outline-none"
                >
                  <span className="absolute -end-full transition-all group-hover:end-4">
                    <MdOutlineImageSearch size={20} />
                  </span>
                  <span className="text-sm font-medium transition-all group-hover:me-4">
                    Start New Scan
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
