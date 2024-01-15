export interface IBaseResponse<T> {
    statusCode: number,
    data: T,
    message: string
}