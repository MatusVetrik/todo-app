import {Button, Grid, TextField} from "@mui/material";
import {Form, Formik} from "formik";
import * as Yup from "yup";
import {useAppDispatch} from "../../redux/hooks";
import {addItemToTodoList} from "../../redux/reducer";

interface Props {
  listId: number;
}

export const TodoItemForm = ({listId}: Props) => {
  const dispatch = useAppDispatch();

  const schema = Yup.object().shape({
    title: Yup.string().required(),
    text: Yup.string().required(),
    date: Yup.string().required(),
  });

  return (
    <Formik
      initialValues={{title: "", text: "", date: ""}}
      validationSchema={schema}
      onSubmit={(values, {resetForm}) => {
        dispatch(
          addItemToTodoList({
            id: listId,
            todo: {
              id: Date.now(),
              title: values.title,
              text: values.text,
              deadline: values.date,
              completed: false,
            },
          })
        );
        resetForm();
      }}
    >
      {({values, handleChange, errors, touched}) => (
        <Form>
          <Grid
            container
            spacing={0}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <div>
              <TextField
                sx={{m: 1}}
                name="title"
                label="Title"
                error={errors.title && touched.title ? true : false}
                value={values.title}
                onChange={handleChange}
              />
            </div>
            <div>
              <TextField
                sx={{m: 1}}
                name="text"
                label="Text"
                error={errors.text && touched.text ? true : false}
                value={values.text}
                onChange={handleChange}
              />
            </div>
            <div>
              <TextField
                sx={{m: 1}}
                name="date"
                error={errors.date && touched.date ? true : false}
                type="datetime-local"
                value={values.date}
                onChange={handleChange}
              />
            </div>
          </Grid>
          <Grid container justifyContent="center">
            <Button type="submit" sx={{width: "50%"}}>
              Add todo to list
            </Button>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};
