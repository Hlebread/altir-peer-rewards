import { v4 as uuid } from 'uuid';
import { User } from '../interfaces';

export const USERS_MOCK: User[] = [
  {
    id: '',
    firstName: 'Frank',
    lastName: 'Sinatra',
    displayName: 'Frank Sinatra',
    imgUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH9ARdI6LXfh63XtswNYKOaKKFUKWwD2Prdw&usqp=CAU',
  },
  {
    id: '',
    firstName: 'Dean',
    lastName: 'Martin',
    displayName: 'Dean Martin',
    imgUrl:
      'https://s3-eu-central-1.amazonaws.com/jazzpeople/wp-content/uploads/2017/11/02135125/Dean-Martin.jpg',
  },
  {
    id: '',
    firstName: 'Ella',
    lastName: 'Fitzgerald',
    displayName: 'Ella Fitzgerald',
    imgUrl:
      'https://www.novochag.ru/upload/img_cache/f9f/f9fdac8bab8c38c72644f9d5c5f4f526_cropped_666x932.jpg',
  },
];
