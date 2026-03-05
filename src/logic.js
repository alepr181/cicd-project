export const validateItem = (text) => {
    const trimmed = text.trim();
    return trimmed.length >= 2 && trimmed.length <= 20;
};

export const formatItem = (text) => {
    return text.trim().toUpperCase();
};