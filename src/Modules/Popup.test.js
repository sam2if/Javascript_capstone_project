import { commentPopup ,Getcomment } from './Popup';

global.document = {
 querySelectorAll: jest.fn(() => []),
};

test('commentPopup function is defined', () => {
 expect(commentPopup).toBeDefined();
})

test('commentPopup function is defined', () => {
 expect(Getcomment).toBeDefined();
});

