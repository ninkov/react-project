import { useParams } from "react-router-dom";

import styles from "./client-details.module.css";
import { useGetOneClients } from "../../hooks/useClients";
import { useForm } from "../../hooks/useForm";
import {useCreateComments,  useGetAllComments } from "../../hooks/useComments";
import { useAuthContext } from "../../context/AuthContext";

const initialValues = {
  comment: "",
};

export default function ClientDetails() {
  const { clientsId } = useParams();
  const [comments,setComments]= useGetAllComments(clientsId)
  const createComment = useCreateComments();
  const [client] = useGetOneClients(clientsId);
  const { isAuthenticated } = useAuthContext();
  const { changeHandler, submitHandler, values } = useForm(
    initialValues,
    ({ comment }) => {
      createComment(clientsId, comment);
    }
  );

  return (
    <section id="client-details">
      <div className="d-flex flex-column text-center mb-5">
        <h1 className="display-4 m-0">
          <span className="text-primary">Pet</span> Details
        </h1>

        <div className={styles["details-content"]}>
          <h2>Breed: {client.breed}</h2>
          <img src={client.imageUrl} alt="Pet Image" width="250" height="200" />
          <p>Age: {client.age}</p>
          <p>Gender: {client.sex}</p>
          <p>Size: {client.size}</p>
          <p>Health Status: {client.healthStatus}</p>
          <p>Personality: {client.personality}</p>

          <p>{client.summary}</p>
          <div className="details-comments">
            <h2>Comments:</h2>

            <ul>
              {/* {Object.keys(client.comments || {}).length > 0 ? (
                Object.values(client.comments).map((comment) => (
                  <li key={comment._id} className="comment">
                    <p>
                      {comment.username}: {comment.text}
                    </p>
                  </li>
                ))
              ) : (
                <p className="no-comment">No comments!</p>
              )} */}
            </ul>
          </div>
        </div>
      </div>

      {/* <!-- Bonus ( for Guests and Users ) --> */}

      {/* <!-- Edit/Delete buttons ( Only for creator of this  )  --> */}
      {/* <div className="buttons">
          <a href="#" className="button">
            Edit
          </a>
          <a href="#" className="button">
            Delete
          </a>
        </div> */}
      {/* </div> */}

      {/* <!-- Bonus --> */}
      {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current  ) --> */}
      {isAuthenticated && (
        <article className={styles["create-comment"]}>
          <label>Add new comment:</label>
          <form className="form" onSubmit={submitHandler}>
            <textarea
              name="comment"
              placeholder="Comment......"
              onChange={changeHandler}
              value={values.comment}
            ></textarea>
            <input className="btn submit" type="submit" value="Add Comment" />
          </form>
        </article>
      )}
    </section>
  );
}
