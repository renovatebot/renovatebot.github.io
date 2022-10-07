import decompress from "brotli/decompress";

function decompressPayload(input) {
  let massagedInput = input;
  try {
    const parsed = JSON.parse(input);
    if (typeof parsed?.payload === "string") {
      massagedInput = parsed.payload;
    }
  } catch (err) {
    // no-op
  }

  const decompressed = decompress(Buffer.from(massagedInput, "base64"));
  const text = new TextDecoder().decode(decompressed);
  const json = JSON.parse(text);
  return JSON.stringify(json, undefined, 2);
}

document.addEventListener("DOMContentLoaded", function () {
  const copied = document.querySelector("#copied");
  const reset = document.querySelector("#reset");
  const input = document.querySelector("#input-text");
  const output = document.querySelector("#output-text");

  input.addEventListener("input", function () {
    if (!input.value.trim()) {
      reset.setAttribute("disabled", true);
    } else {
      const inputText = input?.value;

      if (!inputText) {
        return;
      }

      reset.removeAttribute("disabled");

      try {
        output.value = decompressPayload(inputText);
        output.select();
        navigator.clipboard.writeText(output.value);
        copied.removeAttribute("hidden");
        setTimeout(function () {
          copied.setAttribute("hidden", true);
        }, 3000);
      } catch (err) {
        output.value = String(err);
      }
    }
  });

  reset.addEventListener("click", function () {
    input.value = "";
    output.value = "";
    reset.setAttribute("disabled", true);
    input.focus();
  });
});
