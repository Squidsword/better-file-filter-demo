import { format } from "./format";
test("trims", () => expect(format(" a ")).toBe("a"));
