import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useCreateClient } from "../../hooks/useClients";

const initialValues = {
  name: "",
  breed: "",
  age: "",
  sex: "",
  size: "",
  healthStatus: "",
  personality: "",
  imageUrl: "",
  summary: "",
};
export default function CLientCreate() {
  const navigate = useNavigate();
  const createClient = useCreateClient();

  const createHandler = async (values) => {
    try {
      const { _id: clientsId } = await createClient(values);
      
      navigate(`/clients/${clientsId}/details`);
    } catch (err) {
      //TODO Set error state and display error
      console.log(err.message);
    }
  };

  const { values, changeHandler, submitHandler } = useForm(
    initialValues,
    createHandler
  );

  return (
    <div>
      <h1>Create Pet Form</h1>
      <form id="create-card" method="post" onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={changeHandler}
            required
          />
          <span className="error"></span>
        </div>

        <div className="form-group">
          <label htmlFor="breed">Breed:</label>
          <input
            type="text"
            id="breed"
            name="breed"
            value={values.breed}
            onChange={changeHandler}
            required
          />
          <span className="error"></span>
        </div>

        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={values.age}
            onChange={changeHandler}
            min="0"
            required
          />
          <span className="error"></span>
        </div>

        <div className="form-group">
          <label htmlFor="sex">Sex:</label>
          <select
            id="sex"
            name="sex"
            value={values.sex}
            onChange={changeHandler}
            required
          >
            <option value="">Select Sex</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <span className="error"></span>
        </div>

        <div className="form-group">
          <label htmlFor="size">Size:</label>
          <select
            id="size"
            name="size"
            value={values.size}
            onChange={changeHandler}
            required
          >
            <option value="">Select Size</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
          <span className="error"></span>
        </div>

        <div className="form-group">
          <label htmlFor="healthStatus">Health Status:</label>
          <select
            id="healthStatus"
            name="healthStatus"
            value={values.healthStatus}
            onChange={changeHandler}
            required
          >
            <option value="">Select Health Status</option>
            <option value="healthy">Healthy</option>
            <option value="sick">Sick</option>
          </select>
          <span className="error"></span>
        </div>

        <div className="form-group">
          <label htmlFor="personality">Personality:</label>
          <textarea
            id="personality"
            name="personality"
            value={values.personality}
            onChange={changeHandler}
            required
          ></textarea>
          <span className="error"></span>
        </div>

        <div className="form-group">
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            value={values.imageUrl}
            onChange={changeHandler}
            required
          />
          <span className="error"></span>
        </div>

        <div className="form-group">
          <label htmlFor="summary">Summary:</label>
          <textarea
            id="summary"
            name="summary"
            value={values.summary}
            onChange={changeHandler}
            required
          ></textarea>
          <span className="error"></span>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
