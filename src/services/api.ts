interface ExecuteCodeResponse {
  status: string;
  output?: string;
  error?: string;
}
interface ExecuteCodeParams {
  language: string;
  code: string;
}

export const executeCode = async ({
  language,
  code,
}: ExecuteCodeParams): Promise<ExecuteCodeResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const lines = code.split("\n").map((line) => line.trim());
      const outputs: string[] = [];

      if (language === "python") {
        for (const line of lines) {
          console.log(line);
          if (line.startsWith("print(")) {
            const output = line.slice(6, -1);
            if (output.length > 0) {
              outputs.push(output);
            } else {
              resolve({
                status: "error",
                error: `SyntaxError: Unexpected token`,
              });
            }
          } else if (line.length > 0) {
            resolve({
              status: "error",
              error: `SyntaxError: Unexpected token in line "${line}"`,
            });
            return;
          }
        }
        resolve({
          status: "success",
          output: outputs.join("\n"),
        });
      } else if (language === "go") {
        for (const line of lines) {
          if (line.startsWith("fmt.Println(")) {
            const output = line.slice(12, -1);
            if (output.length > 0) {
              outputs.push(output);
            } else {
              resolve({
                status: "error",
                error: `SyntaxError: Unexpected token`,
              });
            }
          } else if (line.length > 0) {
            resolve({
              status: "error",
              error: `SyntaxError: Unexpected token in line "${line}"`,
            });
            return;
          }
        }
        resolve({
          status: "success",
          output: outputs.join("\n"),
        });
      } else {
        resolve({
          status: "error",
          error: "Unsupported language",
        });
      }
    }, 1000);
  });
};
