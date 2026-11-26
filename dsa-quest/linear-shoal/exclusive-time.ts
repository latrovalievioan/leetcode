type LogEvent = {
  fn: number;
  event: "start" | "end";
  timestamp: number;
};

function exclusiveTime(n: number, logs: string[]): number[] {
  const parsed = logs.map((l) => {
    const [fn, event, timestamp] = l.split(":");
    return {
      fn: Number(fn),
      event,
      timestamp: Number(timestamp),
    } as LogEvent;
  });

  const fns = new Array(n).fill(0);

  const stack: LogEvent[] = [];

  let prevTimestamp = 0;

  for (const { fn, event, timestamp } of parsed) {
    if (stack.length) {
      const top = stack[stack.length - 1];

      fns[top.fn] += timestamp - prevTimestamp + (event === "start" ? 0 : 1);
    }

    if (event === "start") {
      stack.push({ fn, event, timestamp });

      prevTimestamp = timestamp;
    }

    if (event === "end") {
      stack.pop()!.timestamp;
      prevTimestamp = timestamp + 1;
    }
  }

  return fns;
}

console.log(exclusiveTime(2, ["0:start:0", "1:start:2", "1:end:5", "0:end:6"]));
console.log(
  exclusiveTime(1, [
    "0:start:0",
    "0:start:2",
    "0:end:5",
    "0:start:6",
    "0:end:6",
    "0:end:7",
  ]),
);
console.log(
  exclusiveTime(2, [
    "0:start:0",
    "0:start:2",
    "0:end:5",
    "1:start:6",
    "1:end:6",
    "0:end:7",
  ]),
);
console.log(exclusiveTime(1, ["0:start:0", "0:end:0"]));
