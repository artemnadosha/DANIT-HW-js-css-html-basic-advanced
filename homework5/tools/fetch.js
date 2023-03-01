export const fetchQuery = async (url, method = "GET", obj) => {
  let body;

  if (method === "POST") {
    body = {
      method: method,
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    };
  } else {
    body = { method: method };
  }

  try {
    let data;
    const response = await fetch(url, body);

    if (method !== "DELETE") {
      data = await response.json();
    }

    return { data, status: response.ok };
  } catch (err) {
    alert(err);
  }
};
