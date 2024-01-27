import jwt from "jsonwebtoken";

export const isLoggedIn = async (req, res, next) => {
    try {
        const {authorization} = req.headers;
        if (!authorization) {
            return res.status(401).json({
                'error': 'Missing authorization header'
            });
        }
        const [authType, token] = authorization.split(' ');
        if (authType !== 'Bearer') {
            return res.status(401).json({
                'error': 'Invalid authorization type'
            });
        }
        if (!token) {
            return res.status(401).json({
                'error': 'Missing token'
            });
        }
        jwt.verify(token, process.env.JWT_SECRET, (error, decodedToken) => {
            if (error) {
                return res.status(401).json({
                    'error': 'Invalid token'
                });
            }
            req.user = decodedToken.user;
            next();
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            'error': error.message
        });
    }
}

export const isAdmin = async (req, res, next) => {
    try {
        if (!req.user || !req.user.isAdmin) {
            return res.status(403).json({
                'error': 'Unauthorized'
            });
        }
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({
            'error': error.message
        });
    }
}

export const isSelf = async (req, res, next) => {
    try {
        if ((!req.user) || (!req.user.isAdmin && (req.user._id !== req.params.id)))
            return res.status(403).json({
                'error': 'Unauthorized'
            });
        next();

    } catch (error) {
        console.error(error);
        res.status(500).json({
            'error': error.message
        });
    }
}