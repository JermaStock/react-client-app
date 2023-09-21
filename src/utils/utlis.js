export const debounce = (callback, ms) => {
  let timerId = null;

  return function (...args) {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => callback(...args), ms);
  };
};

export const formatName = (str) => {
  return str
    .split(" ")
    .filter((word) => word.trim())
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export const destroyInputFields = (args) => {
	for (const arg of args) {
		if (Array.isArray(arg)) {
			arg.forEach(a => a.destroy());
		} else {
			arg.destroy();
		}
	}
}
