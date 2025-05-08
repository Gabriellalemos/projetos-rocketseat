function AdressForm() {
  //   const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        name="name"
        // ref={register({ required: true, maxLength: 80 })}
        placeholder="Name"
      />
      {/* {errors.name && <p>This field is required</p>} */}

      <input
        name="address"
        // ref={register({ required: true, maxLength: 100 })}
        placeholder="Address"
      />
      {/* {errors.address && <p>This field is required</p>} */}

      <input
        name="phone"
        // ref={register({ required: true, maxLength: 12 })}
        placeholder="Phone"
      />
      {/* {errors.phone && <p>This field is required</p>} */}

      <input type="submit" />
    </form>
  );
}

export default AdressForm;
