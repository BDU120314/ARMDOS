import React from 'react'

const RightSideBar = () => {
  return (
    <aside className="rightside">
      <div class="search">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="search here"
        />
        <button type="submit">search </button>
      </div>
    </aside>
  );
}

export default RightSideBar