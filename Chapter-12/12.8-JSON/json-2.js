/* JSON can be nested even further. A list can also contain objects, 
which can contain lists with objects, with lists, and so on
More complex example:
*/

{
  companies: [
    {
      name: "JavaScript Code Dojo",
      addresses: [
        {
          street: "123 Main street",
          zipcode: 12345,
          city: "Scott",
        },
        {
          street: "123 Side street",
          zipcode: 35401,
          city: "Tuscaloosa",
        }
      ],
    },
    {
      name: "Python Code Dojo",
      addresses: [
        {
          street: "123 Party street",
          zipcode: 68863,
          city: "Nebraska",
        },
        {
          street: "123 Monty street",
          zipcode: 33306,
          city: "Florida",
        }
      ],
    }
  ];
}

/*
This is a list of companies, with two company objects on it. 
The companies have two key-value pairs: a name and an address list. 
Each of the address lists contains two addresses, and each address consists of three key-value pairs: street, 
zipcode and city
*/