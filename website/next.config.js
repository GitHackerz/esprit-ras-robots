/** @type {import('next').NextConfig} */

module.exports = {
    experimental: {
        allowedRevalidateHeaderKeys: ['x-custom-header']
    }
}
