// server/api/posts.get.ts
export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const page = Number(query.page) || 1;
    const limit = 8;

    console.log(`Запрос для page=${page}, limit=${limit}`);

    // Запрашиваем текущую страницу
    const response = await $fetch('https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts', {
        method: 'GET',
        query: { page, limit },
    });

    // Запрашиваем общее количество постов
    let total = 0;
    try {
        const allPosts = await $fetch('https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts', {
            method: 'GET',
        });
        total = allPosts.length; // Ожидаем 87
        console.log(`Total posts: ${total}`);
    } catch (error) {
        console.error('Ошибка при получении total:', error);
        total = response.length === limit ? limit * (page + 1) : response.length;
    }

    return {
        posts: response,
        total,
        page,
        limit,
    };
});