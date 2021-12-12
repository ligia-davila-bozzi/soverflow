class NotFoundError extends Error {
    statusCode: number;

    constructor(message: string) {
        super(message);
        this.name = 'Not Found';
        this.statusCode = 404;
    }
}

export default NotFoundError;
