import { useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;

  .container {
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;

const Contact = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const submitHandle = async (e) => {
    e.preventDefault();

    try {
      const value = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        message: messageRef.current.value,
      };
      const res = await fetch(
        "https://yogistore-f7c1b-default-rtdb.asia-southeast1.firebasedatabase.app/value.json",
        {
          method: "POST",
          body: JSON.stringify(value),

          headers: { "Content-Type": "application/json" },
        }
      );
      if (!res.ok) {
        throw new Error(`Something went wrong ${res.status}`);
      }
      const data = await res.json();

      console.log(data, "hiii");
    } catch (error) {
      console.log(error, "errorr");
    }


    messageRef.current.value= ""
    emailRef.current.value= ""
    nameRef.current.value= ""
  };

  return (
    <Wrapper>
      <h2 className="common-heading">Contact page</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.411926358381!2d75.89790248006881!3d22.7500893261615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e2aa63f86ecf%3A0x5ec994f6b12cb4bc!2sRadisson%20Blu%20Hotel%20Indore!5e0!3m2!1sen!2sin!4v1720608044911!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form onSubmit={submitHandle} className="contact-inputs">
            <input
              ref={nameRef}
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            />

            <input
              ref={emailRef}
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              ref={messageRef}
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"
            ></textarea>

            {/* <input type="submit" value="send" /> */}
            <button type="submit">send</button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
