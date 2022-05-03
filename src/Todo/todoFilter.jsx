import React, { memo } from 'react';
import PropTypes from 'prop-types';

// check 3 buttons are there or not
// check button's text
// base on filter type check class name is there or not
// base on button click check what data is passing to function
function TodoFilter({ filterTodo, filterType }) {
  return (
    <div className="flex w-full">
      <button
        type="button"
        className={`btn-primary rounded-none flex-1 ${filterType === 'all' ? 'bg-blue-700' : ''}`}
        onClick={() => filterTodo('all')}
      >
        All
      </button>
      <button
        type="button"
        className={`btn-primary rounded-none flex-1 ${
          filterType === 'pending' ? 'bg-blue-700' : ''
        }`}
        onClick={() => filterTodo('pending')}
      >
        Pending
      </button>
      <button
        type="button"
        className={`btn-primary rounded-none flex-1 ${
          filterType === 'completed' ? 'bg-blue-700' : ''
        }`}
        onClick={() => filterTodo('completed')}
      >
        Completed
      </button>
    </div>
  );
}

TodoFilter.propTypes = {
  filterType: PropTypes.oneOf(['all', 'pending', 'completed']).isRequired,
  filterTodo: PropTypes.func.isRequired,
};

export default memo(TodoFilter);
