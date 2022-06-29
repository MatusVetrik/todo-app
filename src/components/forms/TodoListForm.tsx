import {Button, Grid, TextField} from "@mui/material";
import {Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import * as Yup from "yup";
import {useAppDispatch} from "../../redux/hooks";
import {addTodoList} from "../../redux/reducer";

export const TodoListForm = () => {
  let navigate = useNavigate();
  const dispatch = useAppDispatch();

  const schema = Yup.object().shape({
    listName: Yup.string().required(),
  });

  return (
    <Formik
      initialValues={{listName: ""}}
      validationSchema={schema}
      onSubmit={(values, {resetForm}) => {
        dispatch(
          addTodoList({
            id: Date.now(),
            name: values.listName,
            todos: [],
          })
        );
        resetForm();
        navigate("/todos");
      }}
    >
      {({values, handleChange, errors, touched}) => (
        <Form>
          <Grid
            container
            direction="column"
            alignItems="center"
            sx={{m: 5, mt: 10}}
            justifyContent="center"
          >
            <TextField
              name="listName"
              label="Todo List Name"
              error={errors.listName && touched.listName ? true : false}
              value={values.listName}
              onChange={handleChange}
              sx={{width: "20%"}}
            />

            <Button type="submit" sx={{m: 2}}>
              Create Todo List
            </Button>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};
