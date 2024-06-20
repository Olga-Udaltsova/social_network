import { useSelector } from "react-redux";
import { NoContent } from "../ui/NoContent";
import { Post } from "./Post";
import { filterPosts, filterFriends } from "../../helpers/filter";
import * as SC from "./styles";

export const Posts = ({ currentUser }) => {
  const { publicPosts, privatePosts } = useSelector((state) => state.posts);
  const myPublicPosts = filterPosts(currentUser, publicPosts);
  const myPrivatePosts = filterPosts(currentUser, privatePosts);
  const { user } = useSelector((state) => state.currentUser);
  const { friends } = useSelector((state) => state.friends);
  const myFriends = filterFriends(user, friends);
  return (
    <SC.SectionPosts>
      <h3>Общедоступные посты</h3>
      <SC.MyPosts>
        {myPublicPosts.length !== 0 ? (
          myPublicPosts.map((filteredPost) => (
            <Post
              key={filteredPost.id}
              myPost={filteredPost}
              currentUser={currentUser}
            />
          ))
        ) : (
          <NoContent>Нет таких постов</NoContent>
        )}
      </SC.MyPosts>

      <h3>Посты только для друзей</h3>
      {myFriends.listOfFriends?.find((item) => item.id === currentUser.id) ||
      user.id === currentUser.id ? (
        <SC.MyPosts>
          {myPrivatePosts.length !== 0 ? (
            myPrivatePosts.map((post) => (
              <Post key={post.id} myPost={post} currentUser={currentUser} />
            ))
          ) : (
            <NoContent>Нет таких постов</NoContent>
          )}
        </SC.MyPosts>
      ) : (
        <NoContent>
          Чтобы увидеть посты, добавьте пользователя в друзья
        </NoContent>
      )}
    </SC.SectionPosts>
  );
};
