export const DEFAULTS = {
    PORT: 3000,
    LIMIT: 1,
    OFFSET: 0,
}

export const CONFIG = {
    MODEL_AI: process.env.MODEL_AI ?? 'openai/gpt-4.1',
    // MODEL_AI: process.env.MODEL_AI ?? 'google/gemini-2.5-flash',
    // MODEL_AI: process.env.MODEL_AI ?? 'zai/glm-4.7-flashx',
}