import "./newQuery.scss";

function NewQuery() {
  return (
    <form action="" className="newQuery">
      <div className="queryHeader">
        <label htmlFor="category" className="category">
          Category
          <select
            name="category"
            id="category"
            defaultValue={"Select query category"}
          >
            <option value="cat1">Category</option>
            <option value="cat2">Category</option>
            <option value="cat3">Category</option>
            <option value="cat4">Category</option>
          </select>
        </label>
        <label htmlFor="subject" className="subject">
          Subject
          <select
            name="subject"
            id="subject"
            defaultValue={"Select query subject or type your own"}
          >
            <option value="sub1">Subject</option>
            <option value="sub2">Subject</option>
            <option value="sub3">Subject</option>
            <option value="sub4">Subject</option>
            <option value="sub5">Subject</option>
          </select>
        </label>
      </div>
      <div className="queryInput">Text Editor</div>
      <div className="check">
        <label htmlFor="getUpdates" className="getUpdates">
          <input type="checkbox" name="getUpdates" id="getUpdates" />I want to
          receive every update on my query
        </label>
        <label htmlFor="setPublic" className="setPublic">
          <input type="checkbox" name="setPublic" id="setPublic" />
          Post my query to the community forum
        </label>
      </div>
      <div className="btnGroup">
        <button className="cancelBtn">Cancel</button>
        <button className="submitBtn">Submit Query</button>
      </div>
    </form>
  );
}

export default NewQuery;
