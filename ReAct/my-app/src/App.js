import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Welcome from './Welcome'
import StudentTable from './StudentTable'




function App() {
  // const students = [{ "id": 1, "first_name": "Caressa", "last_name": "Gerrelt", "email": "cgerrelt0@yellowpages.com", "gender": "Female", "mark": 9 },
  // { "id": 2, "first_name": "Tymon", "last_name": "Jonsson", "email": "tjonsson1@cmu.edu", "gender": "Male", "mark": 8 },
  // { "id": 3, "first_name": "Inez", "last_name": "Besnardeau", "email": "ibesnardeau2@shareasale.com", "gender": "Agender", "mark": 4 },
  // { "id": 4, "first_name": "Clerc", "last_name": "Elcom", "email": "celcom3@dmoz.org", "gender": "Male", "mark": 2 },
  // { "id": 5, "first_name": "Caressa", "last_name": "Prangnell", "email": "aprangnell4@unicef.org", "gender": "Male", "mark": 10 },
  // { "id": 6, "first_name": "Andeee", "last_name": "Hallowes", "email": "ahallowes5@mapy.cz", "gender": "Genderfluid", "mark": 7 },
  // { "id": 7, "first_name": "Jon", "last_name": "Kerins", "email": "jkerins6@spotify.com", "gender": "Male", "mark": 6 },
  // { "id": 8, "first_name": "Erroll", "last_name": "YKepe", "email": "ekepe7@vkontakte.ru", "gender": "Male", "mark": 5 },
  // { "id": 9, "first_name": "Erroll", "last_name": "Perceval", "email": "tperceval8@amazon.co.jp", "gender": "Female", "mark": 8 },
  // { "id": 10, "first_name": "Caressa", "last_name": "Barta", "email": "cbarta9@e-recht24.de", "gender": "Male", "mark": 3 }];

  // const deleteItem = () => {
  //   alert("Ngan");
  // }

  // function deleteItem() {
  //   alert("Ngan");
  // }

  // function sort() {
  //   alert("Ngan");
  // }


  // const DisplayData = students.map(
  //   (student) => {
  //     return (
  //       <tr>
  //         <td>{student.id}</td>
  //         <td>{student.first_name}</td>
  //         <td>{student.last_name}</td>
  //         <td>{student.email}</td>
  //         <td>{student.gender}</td>
  //         <td>
  //           <button className='btn btn-warning'>Sửa</button>
  //           <button className='btn btn-danger'>Xóa</button>
  //         </td>
  //       </tr>
  //     )
  //   }
  // )


  // for (var i = 0; i < students.length; i++) {
  //   if (students[i].first_name.indexOf("C") == 0) {
  //     studentList.push((
  //       <tr>
  //         <td>{students[i].id}</td>
  //         <td>{students[i].first_name}</td>
  //         <td>{students[i].last_name}</td>
  //         <td>{students[i].email}</td>
  //         <td>{students[i].gender}</td>
  //         <td>
  //           <button className='btn btn-warning' >Sửa</button>
  //           <button className='btn btn-danger'>Xóa</button>
  //         </td>
  //       </tr>
  //     ));
  //   }

  // }

  // var studentList = [];

  // const styles = [];

  // var className;

  // students.sort(function (a, b) { return b.mark - a.mark });

  // students.sort((a, b) => {
  //   if (a.first_name == b.first_name) {
  //     return a.last_name.localeCompare(b.last_name);
  //   } else {
  //     return a.first_name.localeCompare(b.first_name);
  //   }
  // });

  // for (var i = 0; i < students.length; i++) {
  // if (students[i].mark >= 8) {
  //   className = "table-success";
  // } else {
  //   if (students[i].mark >= 4) {
  //     className = "table-warning";
  //   } else {
  //     className = "table-danger"
  //   }
  // }
  // studentList.push((
  // <tr className={className}>
  //   <td>{students[i].id}</td>
  //   <td>{students[i].first_name}</td>
  //   <td>{students[i].last_name}</td>
  //   <td>{students[i].email}</td>
  //   <td>{students[i].gender}</td>
  //   <td style={{ color: students[i].mark >= 8 ? 'blue' : students[i].mark >= 4 ? 'brown' : 'red' }}>
  //     {students[i].mark}
  //   </td>
  //   <td>
  //     <button className='btn btn-warning' >Sửa</button>
  //     <button className='btn btn-danger' onClick={deleteItem}>Xóa</button>
  //   </td>
  // </tr >

  //     <StudentTable id={students[i].id} firstName={students[i].first_name} lastName={students[i].last_name} email={students[i].email} gender={students[i].gender} mark={students[i].mark} />
  //   ));
  // }


  // var studentsList = students.filter(student => student.first_name.indexOf("C") == 0);
  // var DisplayData = studentsList.map((item) => (
  //   <tr>
  //     <td>{item.id}</td>
  //     <td>{item.first_name}</td>
  //     <td>{item.last_name}</td>
  //     <td>{item.email}</td>
  //     <td>{item.gender}</td>
  //     <td>
  //       <button className='btn btn-warning' >Sửa</button>
  //       <button className='btn btn-danger' onClick={deleteItem()}>Xóa</button>
  //     </td>
  //   </tr >
  // )



  // );

  // IF STATEMENT

  const [searchTerm, setSearchTerm] = useState('');
  const [typeSearch, setTypeSearch] = useState('');
  // const [data, searchName] = useState(students);

  const [titleSearch, setTitleSearch] = useState('');

  const [data, setData] = useState([]);
  // const [student, setStudents] = useState([]);

  useEffect(() => {
    let url = "https://62b40f94530b26da4cb56a6a.mockapi.io/students";
    if (searchTerm.length > 0) {
      url = url + "?first_name=" + searchTerm;
      // sortBy = createdAt & order=desc
    }

    console.log(url);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
      })
  }, [searchTerm])

  useEffect(() => {
    let url = "https://62b40f94530b26da4cb56a6a.mockapi.io/students";
    url = url + "?sortBy=" + titleSearch + "&order=" + typeSearch;
    // sortBy = createdAt & order=desc
    console.log(url);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
      })
  }, [titleSearch, typeSearch])
  // const searchStudent = () => {
  //   let rs = null;
  //   if (searchTerm.length > 0) {
  //     rs = student.filter((item) => {
  //       let firstName = item.first_name.toLowerCase();
  //       return firstName.indexOf(searchTerm.toLowerCase()) == 0;
  //     });

  //   } else {
  //     rs = student;
  //   }
  //   setStudents(rs);
  // }

  return (
    <div>
      <h1 className='text-center container text-dark'>Danh sách sinh viên</h1>
      <div class="row container d-flex justify-content-end">
        <div class="col-sm-6">

          <div className="input-group">
            <input type='text' value={searchTerm} onInput={e => setSearchTerm(e.target.value)} />
            <div className="input-group-append">
              <button className="btn btn-secondary" type="button">
                <i className="fa fa-search"></i>
              </button>
            </div>

            <select name="title_search" value={titleSearch} onChange={e => { setTitleSearch(e.target.value); console.log(titleSearch) }}>
              <option value="mark">Mark</option>
              <option value="first_name">First Name</option>
              <option value="last_name">Last Name</option>
            </select>

            <select name="type_search" value={typeSearch} onChange={e => { setTypeSearch(e.target.value); console.log(typeSearch) }}>
              <option value="asc">ASC</option>
              <option value="desc">DESC</option>
            </select>
          </div>

        </div>
      </div>
      <StudentTable data={data} />

      {/* Table 2 to test sorting function */}

      {/* <h1 className='text-center container text-dark'>Danh sách sinh viên</h1>
      <div class="row container d-flex justify-content-end">
        <div class="col-sm-6">

          <div className="input-group">
            <input type='text' value={searchTerm} onInput={(e) => setSearchTerm(e.target.value)} />
            <div className="input-group-append">
              <button className="btn btn-secondary" type="button">
                <i className="fa fa-search"></i>
              </button>
            </div>

            <select name="title_search">
              <option value="mark">Mark</option>
              <option value="first_name">First Name</option>
              <option value="last_name">Last Name</option>
            </select>

            <select name="ad_search">
              <option value="asc">ASC</option>
              <option value="desc">DESC</option>
            </select>
          </div>

        </div>
      </div>
      <StudentTable data={data} /> */}
    </div>

    // khong dung If truc tiep trong JSX
    // class = className first_name

  );


}

// function App2() {
//   // const myArr = ['Ngan', 'Ha'];
//   // const myList = myArr.map((item) => <p>{item}</p>)

//   return (
//     <div>
//       <h1>Hello World!</h1>
//       <div>
//         <h2>Hello!</h2>
//       </div>
//     </div>


//   );
// }
// function noApp() {
//   return (

//   )
// }

function MyForm() {

  return (
    <>

    </>

  )
}


export default App;
