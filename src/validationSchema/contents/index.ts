import * as yup from 'yup';

export const contentValidationSchema = yup.object().shape({
  status: yup.string().required(),
  parameters: yup.string().required(),
  content: yup.string().required(),
  user_id: yup.string().nullable(),
  company_id: yup.string().nullable(),
});
