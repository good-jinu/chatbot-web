import { UserCircleIcon } from "lucide-react";

export interface ArgumentInitPoints {
  topic: string;
  keyPoints: {
    subject: string;
    Alice: string;
    Bob: string;
  }[];
}

export const ArgumentMessage = ({ result }: { result: ArgumentInitPoints }) => {
  return (
    <div className="flex flex-col gap-6 p-4 md:p-6 min-h-screen">
      <div className="pb-4 border-b border-card">
        <h1 className="text-xl md:text-2xl font-bold text-card-foreground">
          {result.topic}
        </h1>
        {/* <p className="text-sm text-gray-500 mt-1">Exploring different viewpoints on the topic.</p> */}
      </div>

      <div className="flex flex-col gap-5">
        <h2 className="text-lg font-semibold text-card-foreground mb-1">
          Key Points Discussed:
        </h2>
        {result.keyPoints.map((keyPoint) => (
          <div
            key={keyPoint.subject}
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
          >
            <div className="p-4 bg-gray-100 border-b border-gray-200">
              <h3 className="text-md font-semibold text-gray-800">
                {keyPoint.subject}
              </h3>
            </div>

            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex flex-col gap-2 p-3 border border-blue-200 rounded-md bg-blue-50/30">
                <div className="flex items-center gap-2">
                  <UserCircleIcon className="h-5 w-5 text-blue-600" />{' '}
                  <span className="text-sm font-semibold text-blue-800">
                    {"Alice's View:"}
                  </span>
                </div>
                <p className="text-sm text-gray-700 pl-1">{keyPoint.Alice}</p>
              </div>

              <div className="flex flex-col gap-2 p-3 border border-green-200 rounded-md bg-green-50/30">
                <div className="flex items-center gap-2">
                  <UserCircleIcon className="h-5 w-5 text-green-600" />{' '}
                  <span className="text-sm font-semibold text-green-800">
                    {"Bob's View:"}
                  </span>
                </div>
                <p className="text-sm text-gray-700 pl-1">{keyPoint.Bob}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export interface ArgumentMessageToolArg {
  topic: string,
}

export const ArgumentMessageToolCall = ({
  args,
}: { args: ArgumentMessageToolArg }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 text-muted-foreground">
        <div className="text-sm font-medium">Argument</div>
        <div className="text-sm">This is an argument message.</div>
      </div>
      <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="text-sm font-medium">{args.topic}</div>
          </div>
      </div>
    </div>
  );
};