import { getAllPosts } from "./getAllPosts";

describe("Проверяем работу функции получения всех постов", () => {
  test("Если нет публичных постов - выводятся приватные", () => {
    const privatePosts = [
      {
        user: {},
        post: "Привет!!",
        id: 2,
      },
      {
        user: {},
        post: "Мой первый комментарий",
        id: 1,
      },
    ];
    const publicPosts = null;
    expect(getAllPosts(privatePosts, publicPosts)).not.toEqual(publicPosts);
  });

  test("Если есть и приватные, и публичные посты - выводятся все", () => {
    const privatePosts = [
      {
        user: {},
        post: "Привет!!",
        id: 2,
      },
      {
        user: {},
        post: "Мой первый комментарий",
        id: 1,
      },
    ];
    const publicPosts = [
      {
        user: {},
        post: "Публичный комментарий",
        id: 3,
      },
    ];
    expect(getAllPosts(privatePosts, publicPosts)).toEqual(
      expect.arrayContaining(publicPosts, privatePosts)
    );
  });
});
