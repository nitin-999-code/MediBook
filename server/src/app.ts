import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import CookieParser from 'cookie-parser';
import httpStatus from 'http-status';
import ApiError from './errors/apiError';
import router from './app/routes';
import compression from 'compression';
import rateLimit from 'express-rate-limit';

const app: Application = express();

app.use(cors());
app.use(CookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(compression());

// Rate limiting
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
    statusCode: 429,
    message: '429 Too Many Requests'
});
app.use('/api', apiLimiter);

// Cache-Control for GET API requests
app.use('/api', (req: Request, res: Response, next: NextFunction) => {
    if (req.method === 'GET') {
        res.setHeader('Cache-Control', 'public, max-age=300');
    }
    next();
});

app.get('/health', (req: Request, res: Response) => {
    res.json({
        status: 'ok',
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });
});

app.use((req: Request, res: Response, next: NextFunction) => {
    const start = Date.now();
    res.on('finish', () => {
        const duration = Date.now() - start;
        const url = req.originalUrl;
        if (
            req.method === 'GET' &&
            (url.includes('doctor') ||
            url.includes('blog') ||
            url.includes('service') ||
            url.includes('review'))
        ) {
            const status = duration > 2000 ? 'SLOW' : 'OK';
            console.log(`Endpoint: ${req.method} ${url}\nResponse time (ms): ${duration}\nStatus: ${status}`);
        }
    });
    next();
});

app.use('/api/v1', router);
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error('[Server Error]', err.message || err);
    if (err instanceof ApiError) {
        res.status(err.statusCode).json({ success: false, message: err.message })
    } else {
        const statusCode = err.statusCode || httpStatus.INTERNAL_SERVER_ERROR;
        res.status(statusCode).json({
            success: false,
            message: err.message || 'Internal Server Error',
        });
    }
})

export default app;