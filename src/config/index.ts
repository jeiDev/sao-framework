import "dotenv/config"

export const serverConfig = {
    isLive: ['production', 'prod', 'staing'].includes(`${process.env.NODE_ENV}`),
    isProd: ['production', 'prod'].includes(`${process.env.NODE_ENV}`),
    nodeEnv: `${process.env.NODE_ENV}`,
    port: parseInt(`${process.env.APP_PORT}`),
    name: `${process.env.APP_NAME}`,
    url: `${process.env.APP_SERVER_URL}`
}

export const postbackConfig = {
    url: `${process.env.POSTBACK_SERVER_URL}`,
    secret: `${process.env.POSTBACK_SERVER_SECRET}`
}

export const smtpConfig = {
    nodemailer: {
        host: `${process.env.NODEMAILER_HOST}`,
        from: `${process.env.NODEMAILER_FROM}`,
        password: `${process.env.NODEMAILER_PASSWORD}`,
    }
}

export const hookConfig = {
    bcoin: {
        secret: `${process.env.HOOK_SECRET}`
    }
}

export const providerConfig = {
    discord: {
        webhookUrl: `${process.env.DISCORD_WEBHOOK_URL}`
    }
}

export const database = {
    redis: {
        urlConnection: `${process.env.REDIS_PUBSUB_URL_CONNECTION}`
    }
}