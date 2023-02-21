const Input = ({ users, onInputChange, inputRef }) => {

  const changeHandler = (e) => {
    const currentUsers = users.filter((user) => {
    const fullUserName = `${user.name.title} ${user.name.first} ${user.name.last}` 
    return (
    fullUserName.toLowerCase().includes(e.target.value.toLowerCase())
    )
    });
    onInputChange(currentUsers);
  };
  return <input type="text" onChange={changeHandler} ref={inputRef} placeholder='search user' />;
};

export default Input;
