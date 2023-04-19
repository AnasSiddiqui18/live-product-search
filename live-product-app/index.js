const input = document.querySelector("#user");
const userlist = document.querySelector(".user-list");
const body = document.querySelector("body");
body.style.backgroundImage = 'url("shopping image.png")';

const userArr = [];

const getUserData = async () => {
  try {
    const res = await fetch(`https://fakestoreapi.com/products`);
    if (!res.ok) {
      throw new Error("This is an error");
    }
    const data = await res.json();
    console.log(data);

    if (data) {
      document.querySelector(".load").style.display = "none";
    } else {
      document.querySelector(".load").style.display = "block";
    }

    data.map((value) => {
      const li = document.createElement("li");
      userArr.push(li);

      li.insertAdjacentHTML(
        "afterbegin",
        `<div class="user-data ">
          <img src="${value.image}" alt="${value.image}" />
          <div class="users">
            <p>${value.title}</p>
            <a href="${value.price}" target="_blank">${value.price}$</a>
          </div>
        </div>`
      );

      userlist.appendChild(li);
    });
  } catch (error) {
    console.log(error);
  }
};

input.addEventListener("input", (e) => {
  const val = e.target.value;
  console.log(val);

  userArr.filter((value) => {
    console.log(value);
    value.innerText.toLowerCase().includes(val.toLowerCase())
      ? value.classList.remove("hide")
      : value.classList.add("hide");
  });
});

getUserData();
