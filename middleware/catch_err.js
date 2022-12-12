module.exports = {
    catch_errors: async(object) => {
        try {
            await object
        } catch (e) {
            if (e.code === 11000) return;
        }
    },
    catch_errors_async: async(object) => {
        try {
            await object
        } catch (e) {
            console.log(e.message);
        }
    }
}