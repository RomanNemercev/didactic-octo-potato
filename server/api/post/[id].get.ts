export default defineEventHandler(async (event) => {
    const id = event.context.params.id;

    console.log(`Fetching post with id=${id}`);

    try {
        const post = await $fetch(`https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${id}`, {
            method: 'GET',
        });
        return post;
    } catch (error) {
        console.error(`Ошибка при получении поста ${id}:`, error);
        throw createError({
            statusCode: 404,
            statusMessage: `Пост с id ${id} не найден`,
        });
    }
});