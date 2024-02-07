// In an express.js application  , a "controller" refers to a part of our code that is responsible for handling the application's logic . Controllers are typically used to process incoming requests ,  interact with models  (data sources) , and send responses back to clients  . They help organize our application by separating concerns and following the MVC (MODEL - VIEW - CONTROLLER ) design pattern .

const home = async (req, resp) => {
  try {
    resp.status(200).send("welcome to home page ");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, resp) => {
  try {
    console.log(req.body);
    resp.status(200).json({ msg: req.body });
  } catch (error) {
    resp.status(400).send({ msg: "page not found" });
  }
};

module.exports = { home, register };
