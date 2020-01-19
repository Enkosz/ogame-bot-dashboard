export const ResponseFactory = (response) => {
  return {
    status: response.data.Status,
    code: response.data.Code,
    message: response.data.Message,
    result: response.data.Result
  }
}
