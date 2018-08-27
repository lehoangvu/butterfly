// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
  	console.log({
    		...context.data,
    		userId: context.params.user._id,
      		createdAt: new Date().getTime()
    	})
    return {
    	...context,
    	data: {
    		...context.data,
    		userId: context.params.user._id,
      		createdAt: new Date().getTime()
    	}
    };
  };
};
