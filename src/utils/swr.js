const generateSwrGetKeyFunction = key => {
  return pageIndex => {
    return [`${key}/${pageIndex}`, pageIndex + 1];
  };
};

export { generateSwrGetKeyFunction };
