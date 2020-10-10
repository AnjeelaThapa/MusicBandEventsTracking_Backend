// use the path of your model
const User = require('../model/User');
const mongoose = require('mongoose');
// use the new name of the database
const url = 'mongodb://localhost:27017/test-database';
beforeAll(async () => {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('User Schema save testing', () => {
    /**
     * Insert Testing --
     * **/
    // it('User addition testing', () => {
    //     const user = {
    //         fullName: 'Anjeela',
    //         username: 'anjeela',
    //         phoneNumber: '1122334477',
    //         email: 'anjeela1@gmail.com',
    //         password: 'anjeela123'
    //     };

    //     return User.create(user)
    //         .then((pro_ret) => {
    //             expect(pro_ret.username).toEqual('anjeela');
    //         });
    // });

    /**
     * Delete a single document within a collection Testing --
     * **/
    /*it('Delete user testing', async () => {
        const status = await User.findOneAndDelete();
        expect(status.ok).toBe(1);
    });*/

    /**
     * Delete entire document within a collection Testing --
    //  * **/
    it('Delete user testing', async () => {
        const status = await User.deleteMany();
        expect(status.ok).toBe(1);
    });

    /**
     * Update Testing --
     * **/
    // it('Update user testing', async () => {

    //     const existingUserId = '5f8162d58ecb81053844e880';
    //     await User.findOneAndUpdate({_id: existingUserId},
    //         {$set: {username: 'updatedUsername'}},
    //         {new: true},
    //         (error, doc) => {
    //            return expect(doc.username).toEqual('updatedUsername')
    //         })
    // });
});
