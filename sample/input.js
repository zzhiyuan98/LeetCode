import readline from "readline";

const rl = readline.createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const read = async () => (await iter.next()).value;

const array = [];

void async function () {
  const count = parseInt(await read());
  for (let i = 1; i <= count; i++) {
    const line = await read();
    array.push(line.split(" "));
  }
  rl.close();
}()

rl.on("close", () => {
  // TODO
});
