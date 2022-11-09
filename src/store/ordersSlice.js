import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const mocks = [
  {
    id: '07fb15bd-8bcb-4089-822d-2f9087d65238',
    customer: 'Кинг Леонид Ильнурович',
    date: '20.11.2021 17:26',
    status: 'confirmed',
    sum: '505 414 ₽',
    amount: '1',
    orderNumber: '910861',
  },
  {
    id: '0e6a601f-1170-40b1-996a-25cd5c3e9276',
    customer: 'Барнс Вячеслав Ильмирович',
    date: '23.04.2022 11:49',
    status: 'declined',
    sum: '13 750 ₽',
    amount: '1',
    orderNumber: '943472',
  },
  {
    id: '38f2d76d-9e8e-4229-9217-be4bbc615fd3',
    customer: 'Калугин Евдоким Владленович',
    date: '03.03.2021 16:26',
    status: 'calculation',
    sum: '35 248 ₽',
    amount: '6',
    orderNumber: '602289',
  },
  {
    id: 'a2e0009e-d4c7-4652-9555-8133cd51c38a',
    customer: 'Олейников Иулиан Леонтьевич',
    date: '07.02.2021 09:58',
    status: 'confirmed',
    sum: '335 228 ₽',
    amount: '9',
    orderNumber: '091750',
  },
  {
    id: '69bcc448-eb24-439c-8370-f971c6e161f9',
    customer: 'Кашин Богдан Израилевич',
    date: '16.01.2021 14:36',
    status: 'confirmed',
    sum: '217 466 ₽',
    amount: '4',
    orderNumber: '527338',
  },
  {
    id: '1ffe1ce8-43a9-41ee-8bbf-b392d6bec98a',
    customer: 'Смышляев Арсений Зиновьевич',
    date: '27.12.2021 08:49',
    status: 'completed',
    sum: '497 614 ₽',
    amount: '2',
    orderNumber: '262831',
  },
  {
    id: '6c08150d-beea-499e-806f-dff8768d0e6c',
    customer: 'Капица Пров Егорович',
    date: '30.06.2022 17:40',
    status: 'new',
    sum: '142 342 ₽',
    amount: '4',
    orderNumber: '922703',
  },
  {
    id: '5a588e9b-1b96-4aba-af4b-9ca8b3f130a2',
    customer: 'Соловьёв Константин Адамович',
    date: '05.10.2022 09:23',
    status: 'calculation',
    sum: '396 511 ₽',
    amount: '5',
    orderNumber: '281263',
  },
  {
    id: '3b94942d-9aef-414d-971e-1956d21f9330',
    customer: 'Гумбольдт Тимур Артемьевич',
    date: '10.06.2022 16:53',
    status: 'new',
    sum: '999 396 ₽',
    amount: '6',
    orderNumber: '341482',
  },
  {
    id: '25aff813-c5de-428c-873d-82a1a75aacc4',
    customer: 'Жуковский Капитон Иоаннович',
    date: '18.06.2022 09:22',
    status: 'postponed',
    sum: '837 349 ₽',
    amount: '4',
    orderNumber: '993220',
  },
  {
    id: 'c9b7c4e9-7e4c-460f-9a56-c8d47209c131',
    customer: 'Смышляев Святополк Феоктистович',
    date: '15.04.2022 09:12',
    status: 'confirmed',
    sum: '366 065 ₽',
    amount: '5',
    orderNumber: '969228',
  },
  {
    id: '288b07e3-8ecf-4c5f-b94e-105f1a301cb0',
    customer: 'Тейлор Герасим Никанорович',
    date: '05.09.2021 10:22',
    status: 'confirmed',
    sum: '442 480 ₽',
    amount: '9',
    orderNumber: '453550',
  },
  {
    id: 'af89cfff-4e24-4c02-891d-371c5f500b5d',
    customer: 'Миронов Онуфрий Феоктистович',
    date: '08.04.2022 09:43',
    status: 'postponed',
    sum: '604 326 ₽',
    amount: '1',
    orderNumber: '256343',
  },
  {
    id: '32f6f714-6ccd-4e35-8e26-22da00993de0',
    customer: 'Островский Авдей Григорьевич',
    date: '11.08.2022 08:11',
    status: 'confirmed',
    sum: '905 868 ₽',
    amount: '4',
    orderNumber: '418251',
  },
  {
    id: '97cdc2a0-868f-4171-85f1-8562368cd41b',
    customer: 'Ерохин Евгений Жоресович',
    date: '29.08.2021 17:40',
    status: 'calculation',
    sum: '146 609 ₽',
    amount: '2',
    orderNumber: '922469',
  },
  {
    id: '54e4aa30-f373-4b05-b7a1-eee9ddc1d156',
    customer: 'Кашин Георгий Игнатьевич',
    date: '16.12.2021 12:35',
    status: 'calculation',
    sum: '672 952 ₽',
    amount: '4',
    orderNumber: '480430',
  },
  {
    id: '3f1230e0-523c-49b5-9648-11bbfd213f2c',
    customer: 'Бабкин Акакий Евдокимович',
    date: '13.06.2022 16:53',
    status: 'completed',
    sum: '994 564 ₽',
    amount: '3',
    orderNumber: '497164',
  },
  {
    id: 'e2b8d491-acef-4195-8caa-80bde3d322dd',
    customer: 'Васильев Артур Елисеевич',
    date: '25.01.2021 09:27',
    status: 'new',
    sum: '848 375 ₽',
    amount: '5',
    orderNumber: '505065',
  },
  {
    id: '845c7025-e5eb-40a6-8cf1-0716f4972d10',
    customer: 'Учитель Герман Давыдович',
    date: '11.12.2021 11:34',
    status: 'confirmed',
    sum: '428 776 ₽',
    amount: '2',
    orderNumber: '031962',
  },
  {
    id: '696bbe34-4425-4241-8dc7-f8ff554c605f',
    customer: 'Бронте Валерьян Ахматович',
    date: '26.02.2022 13:10',
    status: 'completed',
    sum: '279 524 ₽',
    amount: '6',
    orderNumber: '688419',
  },
  {
    id: '582d77c4-f579-4251-97cc-3ce5e68a5395',
    customer: 'Некрасов Евдоким Федосьевич',
    date: '14.10.2021 15:55',
    status: 'completed',
    sum: '989 747 ₽',
    amount: '6',
    orderNumber: '849398',
  },
  {
    id: '7c2b27fb-711e-45bf-9afc-1df469c145e7',
    customer: 'Абрамович Никон Эдгардович',
    date: '30.09.2022 09:40',
    status: 'confirmed',
    sum: '824 314 ₽',
    amount: '1',
    orderNumber: '742078',
  },
  {
    id: '886be225-baa2-4e76-9df1-0c1f7d5942d4',
    customer: 'Сухоруков Тит Елизарович',
    date: '26.07.2021 13:04',
    status: 'postponed',
    sum: '644 344 ₽',
    amount: '4',
    orderNumber: '438442',
  },
  {
    id: '567d2560-c483-47f8-8e7d-68fb4d47f193',
    customer: 'Фармер Савелий Ахматович',
    date: '25.08.2022 13:48',
    status: 'postponed',
    sum: '932 297 ₽',
    amount: '9',
    orderNumber: '011143',
  },
  {
    id: '24e928d9-bd77-45ef-a1d7-8412c575021e',
    customer: 'Мур Пахомий Максимилианович',
    date: '01.02.2021 16:31',
    status: 'postponed',
    sum: '348 128 ₽',
    amount: '5',
    orderNumber: '841169',
  },
  {
    id: '868595a3-7926-433c-92e6-a3bbc17c2508',
    customer: 'Мистраль Руслан Ахматович',
    date: '05.05.2022 13:16',
    status: 'new',
    sum: '766 800 ₽',
    amount: '1',
    orderNumber: '436385',
  },
  {
    id: '9c387173-90d7-4d61-a51e-3ff843de6b5b',
    customer: 'Мур undefined Никитович',
    date: '24.01.2022 16:06',
    status: 'new',
    sum: '132 192 ₽',
    amount: '3',
    orderNumber: '923999',
  },
  {
    id: '3a3bd47d-a78d-4668-914c-56c8b51e05c1',
    customer: 'Ерофеев Альберт Эдгардович',
    date: '18.08.2021 14:21',
    status: 'confirmed',
    sum: '258 006 ₽',
    amount: '7',
    orderNumber: '045492',
  },
  {
    id: 'b68e48d2-8c55-447a-891b-2e681a20478b',
    customer: 'Булгаков Демид Феодосьевич',
    date: '27.03.2021 13:24',
    status: 'new',
    sum: '900 891 ₽',
    amount: '7',
    orderNumber: '979392',
  },
  {
    id: 'e1a1233d-2ce3-4f77-95da-8a72547d1727',
    customer: 'Быков Кузьма Харламович',
    date: '25.07.2022 15:31',
    status: 'postponed',
    sum: '207 657 ₽',
    amount: '5',
    orderNumber: '716667',
  },
  {
    id: 'ea1012a3-73f0-4d06-a468-8e026a20731a',
    customer: 'Скотт Фотий Бориславович',
    date: '19.07.2022 16:42',
    status: 'postponed',
    sum: '412 599 ₽',
    amount: '5',
    orderNumber: '545173',
  },
  {
    id: '99740a13-af91-4e73-b80b-6820df5fbabb',
    customer: 'Любарская Тимофей Трифонович',
    date: '17.01.2021 16:34',
    status: 'confirmed',
    sum: '125 092 ₽',
    amount: '4',
    orderNumber: '009854',
  },
  {
    id: '00501af0-f9b8-4924-a3a3-f3a4df129f96',
    customer: 'Кочетков Капитон Николаевич',
    date: '20.08.2022 15:52',
    status: 'completed',
    sum: '326 726 ₽',
    amount: '1',
    orderNumber: '351849',
  },
  {
    id: '76b15ded-f2da-45c9-a974-b63b32d92071',
    customer: 'Бабушкин Иннокентий Рустамович',
    date: '23.02.2021 14:52',
    status: 'confirmed',
    sum: '92 022 ₽',
    amount: '3',
    orderNumber: '737603',
  },
  {
    id: 'b57bfe0b-8db6-40d7-8eac-a1434911e96f',
    customer: 'Резерфорд Кондрат Олегович',
    date: '28.03.2022 08:56',
    status: 'new',
    sum: '115 273 ₽',
    amount: '9',
    orderNumber: '997673',
  },
  {
    id: 'b0368800-46b8-4723-89c9-afaba0f53c23',
    customer: 'Лебедь Мирослав Семёнович',
    date: '20.07.2021 11:02',
    status: 'confirmed',
    sum: '493 173 ₽',
    amount: '8',
    orderNumber: '717634',
  },
  {
    id: '1447c8c8-1824-4b2a-bfb0-f5153b46aa2d',
    customer: 'Вашингтон Иакинф Ильсурович',
    date: '10.04.2021 12:04',
    status: 'confirmed',
    sum: '926 783 ₽',
    amount: '6',
    orderNumber: '248613',
  },
  {
    id: '25abb309-d6e2-4a39-b4c2-3f4c25c5669d',
    customer: 'Белинский Софрон Даниилович',
    date: '19.01.2022 16:56',
    status: 'declined',
    sum: '982 816 ₽',
    amount: '1',
    orderNumber: '680151',
  },
  {
    id: 'e4bec84b-6675-4d74-9014-13b850cb5ab9',
    customer: 'Радд Никифор Зиновьевич',
    date: '13.05.2022 08:05',
    status: 'calculation',
    sum: '204 197 ₽',
    amount: '1',
    orderNumber: '275966',
  },
  {
    id: '1658f381-3a7f-4f3b-907f-3a3649a03d99',
    customer: 'Бунин Варлам Давидович',
    date: '04.08.2021 09:43',
    status: 'postponed',
    sum: '766 083 ₽',
    amount: '2',
    orderNumber: '346339',
  },
  {
    id: 'f4b7659a-6dc2-49c2-8686-596becf48c11',
    customer: 'Богомолов Артём Федотович',
    date: '27.04.2021 17:35',
    status: 'completed',
    sum: '563 854 ₽',
    amount: '1',
    orderNumber: '842612',
  },
  {
    id: 'bb39c403-5c83-4fc0-b69f-1a1aa506c9b1',
    customer: 'Калугин Федосей Адамович',
    date: '08.03.2022 15:42',
    status: 'calculation',
    sum: '294 683 ₽',
    amount: '5',
    orderNumber: '036322',
  },
  {
    id: '8cb11b44-fac9-4918-a168-b84fd9a4ed41',
    customer: 'Франко Филимон Осипович',
    date: '21.01.2021 08:50',
    status: 'postponed',
    sum: '729 828 ₽',
    amount: '3',
    orderNumber: '860259',
  },
  {
    id: '6166ce25-0a38-40ed-a97d-6379e942b525',
    customer: 'Четвертинский Демид Денисович',
    date: '27.12.2021 09:43',
    status: 'calculation',
    sum: '420 713 ₽',
    amount: '5',
    orderNumber: '580444',
  },
  {
    id: '40581d22-4eda-487d-9697-2f59ce6e13e3',
    customer: 'Леонтьев Савелий Акимович',
    date: '05.06.2022 09:57',
    status: 'completed',
    sum: '204 262 ₽',
    amount: '7',
    orderNumber: '105626',
  },
  {
    id: 'c9234a98-e05a-4aca-9d8d-64a742aae108',
    customer: 'Гусев Евграф Елисеевич',
    date: '14.02.2021 10:39',
    status: 'declined',
    sum: '942 822 ₽',
    amount: '5',
    orderNumber: '807185',
  },
  {
    id: '47265c66-e56f-4696-9ef8-14047384f04e',
    customer: 'Образцова Федот Антипович',
    date: '16.09.2021 11:19',
    status: 'confirmed',
    sum: '863 442 ₽',
    amount: '5',
    orderNumber: '469251',
  },
  {
    id: '1f085f7a-dafc-4528-8df9-3f62f1b90f43',
    customer: 'Паркер Никон Михайлович',
    date: '05.08.2021 17:20',
    status: 'completed',
    sum: '524 175 ₽',
    amount: '6',
    orderNumber: '768862',
  },
  {
    id: '79224fe0-52aa-4461-a314-c512789139e3',
    customer: 'Тихонов Агафон Израилевич',
    date: '26.03.2021 16:15',
    status: 'declined',
    sum: '78 941 ₽',
    amount: '2',
    orderNumber: '435225',
  },
  {
    id: 'e4289623-27fa-4879-a00e-7f7402ed1e9c',
    customer: 'Сергеев Варлам Романович',
    date: '07.10.2022 13:47',
    status: 'confirmed',
    sum: '158 179 ₽',
    amount: '4',
    orderNumber: '162504',
  },
  {
    id: '5f2c659f-4da4-40aa-9f70-ac2a8d96dfcf',
    customer: 'Перес Дорофей Захарьевич',
    date: '10.01.2021 15:40',
    status: 'calculation',
    sum: '500 660 ₽',
    amount: '6',
    orderNumber: '963696',
  },
  {
    id: 'e7c70fa8-15b7-47e1-9f66-18a771ef7314',
    customer: 'Гонкур Виталий Федосеевич',
    date: '14.03.2021 14:15',
    status: 'calculation',
    sum: '411 383 ₽',
    amount: '5',
    orderNumber: '970813',
  },
  {
    id: '280c560f-0a45-4bbd-b876-207deffb5cd2',
    customer: 'Бах Севастьян Адрианович',
    date: '22.09.2022 12:37',
    status: 'declined',
    sum: '413 466 ₽',
    amount: '7',
    orderNumber: '323020',
  },
  {
    id: 'ac5b742a-97e7-4d5d-8ab8-b37d6860700e',
    customer: 'Дзержинский Виталий Леонович',
    date: '08.03.2021 11:52',
    status: 'calculation',
    sum: '581 387 ₽',
    amount: '9',
    orderNumber: '222229',
  },
  {
    id: '458fcaf3-c529-4599-93a1-dbbb093faa3e',
    customer: 'Сидоров Никон Ефимьевич',
    date: '26.06.2022 16:43',
    status: 'confirmed',
    sum: '676 087 ₽',
    amount: '1',
    orderNumber: '480608',
  },
  {
    id: 'b11b4a18-8dcc-4ff5-b701-5120df02e3e3',
    customer: 'Смышляев Акиндин Аксёнович',
    date: '13.01.2022 12:34',
    status: 'confirmed',
    sum: '948 888 ₽',
    amount: '9',
    orderNumber: '849992',
  },
  {
    id: 'abc7bc3b-7abf-4fc0-8102-1366782bf1bd',
    customer: 'Вашингтон Виталий Теймуразович',
    date: '09.08.2022 13:58',
    status: 'new',
    sum: '617 845 ₽',
    amount: '5',
    orderNumber: '867777',
  },
  {
    id: '858d6648-c2e2-4931-9676-49c7920cec76',
    customer: 'Тихонов Донат Магометович',
    date: '06.10.2022 14:27',
    status: 'calculation',
    sum: '569 498 ₽',
    amount: '9',
    orderNumber: '458886',
  },
  {
    id: '1c9a842b-e114-4bc2-836e-7cd92a0a654a',
    customer: 'Бронштейн Пахомий Тихонович',
    date: '10.03.2022 13:33',
    status: 'completed',
    sum: '768 538 ₽',
    amount: '1',
    orderNumber: '780988',
  },
  {
    id: '16a3c1bd-98a2-45a7-bae0-e4ddef3c51ed',
    customer: 'Грин Григорий Владленович',
    date: '04.03.2021 08:25',
    status: 'confirmed',
    sum: '558 644 ₽',
    amount: '9',
    orderNumber: '812941',
  },
  {
    id: 'b931ead7-5569-4271-8b30-505bc146d0ef',
    customer: 'Рэй Феоктист Ильясович',
    date: '13.04.2022 16:13',
    status: 'postponed',
    sum: '355 680 ₽',
    amount: '8',
    orderNumber: '935184',
  },
  {
    id: 'd8f5f6b4-ff24-4691-86fc-79428b8f6c7b',
    customer: 'Любарский Логгин Антипович',
    date: '01.01.2022 11:18',
    status: 'new',
    sum: '749 076 ₽',
    amount: '5',
    orderNumber: '532820',
  },
  {
    id: '87864ccb-9230-4509-a445-af395e9a5899',
    customer: 'Масляков Ираклий Измаилович',
    date: '20.06.2022 12:59',
    status: 'completed',
    sum: '584 067 ₽',
    amount: '6',
    orderNumber: '904405',
  },
  {
    id: '17b06f54-27ad-475a-97b7-be32e87783f2',
    customer: 'Попов Пантелеймон Викентьевич',
    date: '12.06.2022 09:49',
    status: 'new',
    sum: '137 422 ₽',
    amount: '3',
    orderNumber: '863825',
  },
  {
    id: '4d3a293a-ca37-4de6-a261-7165856f1f5e',
    customer: 'Кочетков Георгий Иваныч',
    date: '23.01.2021 12:38',
    status: 'confirmed',
    sum: '107 381 ₽',
    amount: '8',
    orderNumber: '682092',
  },
  {
    id: '75c9137f-bafc-422e-bbbd-a29e73b8d1a3',
    customer: 'Фергюсон Василий Ермолаевич',
    date: '22.01.2021 08:49',
    status: 'postponed',
    sum: '874 873 ₽',
    amount: '9',
    orderNumber: '156432',
  },
  {
    id: '3951fedd-afe0-4af1-a8c3-d35c6914026b',
    customer: 'Богословский Матвей Андроникович',
    date: '08.04.2021 16:14',
    status: 'declined',
    sum: '85 657 ₽',
    amount: '3',
    orderNumber: '091243',
  },
  {
    id: '546c7516-85ed-4973-b0b3-2d557aed4fca',
    customer: 'Фудель Корнилий Павлович',
    date: '30.05.2021 15:34',
    status: 'confirmed',
    sum: '963 156 ₽',
    amount: '6',
    orderNumber: '574110',
  },
  {
    id: '50a34312-76d6-45fb-944a-a0e71087bdb5',
    customer: 'Лебедь Галактион Гавриилович',
    date: '12.09.2021 15:04',
    status: 'new',
    sum: '882 138 ₽',
    amount: '3',
    orderNumber: '967918',
  },
  {
    id: '8dddd65e-85bf-4f84-b601-baa16c46ee64',
    customer: 'Тойнби Демид Израилевич',
    date: '01.07.2022 10:02',
    status: 'postponed',
    sum: '99 746 ₽',
    amount: '8',
    orderNumber: '593227',
  },
  {
    id: '21784313-f668-4797-8ea1-d45d6b7b566b',
    customer: 'Уилсон Тарас Львович',
    date: '28.10.2021 10:06',
    status: 'completed',
    sum: '455 884 ₽',
    amount: '1',
    orderNumber: '391453',
  },
  {
    id: '7e5b0637-87bd-42a1-a11b-a6410df7f6df',
    customer: 'Хилл Ермолай Виленович',
    date: '14.08.2021 15:46',
    status: 'declined',
    sum: '759 161 ₽',
    amount: '6',
    orderNumber: '888902',
  },
  {
    id: '2b713348-a67c-4145-9dc8-0213670b4f02',
    customer: 'Маркс Сила Тихонович',
    date: '06.04.2022 11:48',
    status: 'calculation',
    sum: '34 481 ₽',
    amount: '5',
    orderNumber: '460994',
  },
  {
    id: 'e339fd4f-50b3-465c-be4b-c099190f7a50',
    customer: 'Четвертинский Тихон Анисимович',
    date: '02.02.2021 12:35',
    status: 'confirmed',
    sum: '844 520 ₽',
    amount: '7',
    orderNumber: '189725',
  },
  {
    id: '669f006e-2ad4-4c45-96c4-90dee2b92159',
    customer: 'Гусев Никифор Константинович',
    date: '14.01.2021 14:23',
    status: 'postponed',
    sum: '954 741 ₽',
    amount: '5',
    orderNumber: '373554',
  },
  {
    id: 'cd03da4f-f41e-48a7-b40b-76ce26373001',
    customer: 'Фридман Самуил Валерьянович',
    date: '16.01.2022 11:55',
    status: 'completed',
    sum: '981 981 ₽',
    amount: '2',
    orderNumber: '889833',
  },
  {
    id: 'ec619638-594d-437d-a439-4ab0825bb3df',
    customer: 'Кочетков Иуда Никитич',
    date: '28.04.2022 15:10',
    status: 'declined',
    sum: '562 450 ₽',
    amount: '2',
    orderNumber: '294840',
  },
  {
    id: 'df8adf15-310e-4020-bfe8-1d975d916f28',
    customer: 'Масляков Назар Власович',
    date: '12.08.2022 11:45',
    status: 'confirmed',
    sum: '53 606 ₽',
    amount: '3',
    orderNumber: '457980',
  },
  {
    id: '0d98d553-2685-4308-bb28-c16f1a3c396a',
    customer: 'Буш Ириней Феодосьевич',
    date: '10.07.2021 14:45',
    status: 'postponed',
    sum: '736 582 ₽',
    amount: '8',
    orderNumber: '125622',
  },
  {
    id: '801a57c1-6ab8-4e07-b3a9-3e8ead5d71bb',
    customer: 'Песков Пантелеймон Гаврилович',
    date: '29.05.2022 15:12',
    status: 'completed',
    sum: '690 754 ₽',
    amount: '2',
    orderNumber: '849180',
  },
  {
    id: 'd20daddb-0b1b-4613-99ef-e198e8e10c4e',
    customer: 'Бах Фаддей Феофанович',
    date: '15.09.2021 17:00',
    status: 'completed',
    sum: '417 295 ₽',
    amount: '7',
    orderNumber: '669919',
  },
  {
    id: '16c1e2d7-19c9-48e1-bcb9-a3fad2abbbcc',
    customer: 'Франко Викентий Ефремович',
    date: '18.09.2022 14:37',
    status: 'declined',
    sum: '579 351 ₽',
    amount: '2',
    orderNumber: '630518',
  },
  {
    id: '3e57bbc4-70db-42d9-817e-7ce262ec1684',
    customer: 'Манн Дорофей Ильясович',
    date: '16.03.2022 09:37',
    status: 'new',
    sum: '890 484 ₽',
    amount: '5',
    orderNumber: '011711',
  },
  {
    id: '045f6ba2-35b2-428f-a099-0a20d500d18f',
    customer: 'Тихонов Куприян Гаджиевич',
    date: '11.02.2021 11:21',
    status: 'confirmed',
    sum: '77 075 ₽',
    amount: '8',
    orderNumber: '712119',
  },
  {
    id: 'b32fffc8-2a0b-4c57-b69a-1ff619f89c3b',
    customer: 'Аккерман Мина Валерьянович',
    date: '15.10.2021 08:31',
    status: 'declined',
    sum: '772 827 ₽',
    amount: '5',
    orderNumber: '745554',
  },
  {
    id: 'db8dcfc2-3860-4018-820a-7f72bebb08f2',
    customer: 'Хилл Сергей Артемьевич',
    date: '06.04.2022 11:38',
    status: 'calculation',
    sum: '413 537 ₽',
    amount: '1',
    orderNumber: '946485',
  },
  {
    id: 'b5a0d5ab-48ca-40a2-b20b-f44b6ad714f8',
    customer: 'Васильев Авдей Федосьевич',
    date: '31.07.2022 09:00',
    status: 'completed',
    sum: '881 708 ₽',
    amount: '6',
    orderNumber: '910934',
  },
  {
    id: '4ad4720b-9ed6-4138-aebb-2852e5a153f3',
    customer: 'Мистраль Трофим Ермилович',
    date: '08.08.2022 14:16',
    status: 'declined',
    sum: '192 717 ₽',
    amount: '4',
    orderNumber: '133669',
  },
  {
    id: '7baa98aa-9075-4ae3-9255-17bbfca2b20a',
    customer: 'Джонсон Станислав Артурович',
    date: '19.11.2021 12:02',
    status: 'postponed',
    sum: '228 514 ₽',
    amount: '3',
    orderNumber: '586541',
  },
  {
    id: 'ea2b549d-5b09-4a75-a62d-1a24138f689b',
    customer: 'Фрич Вадим Игнатьевич',
    date: '16.11.2021 10:34',
    status: 'completed',
    sum: '185 714 ₽',
    amount: '1',
    orderNumber: '142950',
  },
  {
    id: '3cf6cbfa-2753-46cb-91ff-fba6606d4c2e',
    customer: 'Керри Евгений Геннадиевич',
    date: '01.08.2022 11:17',
    status: 'calculation',
    sum: '539 605 ₽',
    amount: '6',
    orderNumber: '173782',
  },
  {
    id: '34695a63-dc49-41a2-b525-ceeecba32266',
    customer: 'Гинзбург Тимур Викентьевич',
    date: '02.07.2021 10:28',
    status: 'postponed',
    sum: '977 045 ₽',
    amount: '1',
    orderNumber: '827863',
  },
  {
    id: '0430acca-d62c-44d9-92d8-8d42330f7fe5',
    customer: 'Сухоруков Валерьян Гавриилович',
    date: '08.07.2021 17:32',
    status: 'confirmed',
    sum: '483 003 ₽',
    amount: '3',
    orderNumber: '647428',
  },
  {
    id: 'c2d7b01a-91d1-4268-9c57-30073e0a9c12',
    customer: 'Савояров Семён Брониславович',
    date: '24.07.2022 17:05',
    status: 'calculation',
    sum: '862 137 ₽',
    amount: '1',
    orderNumber: '919636',
  },
  {
    id: '13b125b0-16be-41b3-9666-7b3fa943c041',
    customer: 'Клинтон Онисим Жанович',
    date: '07.04.2022 14:28',
    status: 'new',
    sum: '742 459 ₽',
    amount: '4',
    orderNumber: '330064',
  },
  {
    id: '2d03e300-0c4c-4456-9af1-b02961f219a0',
    customer: 'Сидоров Парфений Федотович',
    date: '12.01.2021 09:13',
    status: 'calculation',
    sum: '790 208 ₽',
    amount: '1',
    orderNumber: '315213',
  },
  {
    id: '2ea42bf9-284e-44ed-ad20-fba6627628ef',
    customer: 'Файнс Лаврентий Харлампьевич',
    date: '11.01.2021 10:15',
    status: 'confirmed',
    sum: '107 613 ₽',
    amount: '3',
    orderNumber: '352791',
  },
  {
    id: 'b265b5ad-2048-4f7f-9200-e35c83668638',
    customer: 'Фадеев Протасий Магометович',
    date: '31.03.2021 08:27',
    status: 'completed',
    sum: '561 241 ₽',
    amount: '9',
    orderNumber: '125999',
  },
  {
    id: '29a3a827-a9ed-4632-a8cd-f001c73c35b7',
    customer: 'Аверинцев Фома Захарович',
    date: '22.01.2022 17:27',
    status: 'completed',
    sum: '463 268 ₽',
    amount: '3',
    orderNumber: '310173',
  },
  {
    id: '3f965754-1c2e-4123-8791-7ed0b6f3c579',
    customer: 'Аксаков Нестор Захарьевич',
    date: '21.07.2022 15:29',
    status: 'completed',
    sum: '989 779 ₽',
    amount: '1',
    orderNumber: '697342',
  },
];

export const fetchOrders = createAsyncThunk('orders/fetchOrders', async () => {
  const orders = await new Promise((resolve) => {
    setTimeout(() => resolve(mocks), 2000);
  });
  return orders;
});

export const ordersSlice = createSlice({
  name: 'orders',
  initialState: { orders: [], isLoading: false },
  reducers: {},
  extraReducers: {
    [fetchOrders.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchOrders.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.orders = action.payload;
    },
  },
});

export const ordersActions = ordersSlice.actions;
