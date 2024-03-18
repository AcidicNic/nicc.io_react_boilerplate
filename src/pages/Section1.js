/* eslint-disable quotes */
import { useState } from 'react';
import * as mailtoLink from 'mailto-link';

import MainWrapper from '../components/MainWrapper';

function EmailReps() {

  const letterTemplate = {
    "TEMPLATE": [
      ["STR", "Dear "],
      ["VAR", "representative name"],
      ["STR", ","],
      ["BR"],
      ["BR"],
      ["STR", "Lorem ipsum dolor sit amet, consectetur "],
      ["VAR", "your name"],
      ["STR", " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat sed cras ornare arcu dui vivamus arcu felis bibendum. "],
      ["VAR", "representative name"],
      ["STR", " dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Aliquet enim tortor at auctor urna nunc. Id eu nisl nunc mi ipsum. Est lorem ipsum dolor sit."],
      ["BR"],
      ["BR"],
      ["STR", "Aliquam faucibus purus in massa tempor nec feugiat nisl pretium. Lobortis mattis aliquam faucibus purus in massa tempor nec. At risus viverra adipiscing at. Sit amet tellus cras adipiscing enim eu. Purus in massa tempor nec feugiat nisl "],
      ["VAR", "another thing"],
      ["STR", ". Sed odio morbi quis commodo odio aenean sed adipiscing. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer."],
      ["BR"],
      ["BR"],
      ["STR", "Ultrices neque ornare aenean euismod elementum nisi. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur. Mauris vitae ultricies leo integer."],
      ["BR"],
      ["BR"],
      ["STR", "Thanks,"],
      ["BR"],
      ["VAR", "your name"],
    ],
    "VARS": {
      "representative name": { "TYPE": "DD", "OPTIONS": ["a cat", "the joker", "someone else"] },
      "your name": { "TYPE": "TXT" },
      "another thing": { "TYPE": "TXT" },
    },
    "EMAIL_TO": {
      "the joker": "imthajokabaybee@teehee.com",
      "someone else": "oiBruv@email.no",
      "a cat": "chiliPeppa@cat.meow",
    } 
  };

  const [emailVars, setEmailVars] = useState({});

  const createMailTo = (e) => {
    e.preventDefault();
    if (e) {
      // validate here
    }
    var emailBody = "";
    for (const item of letterTemplate.TEMPLATE) {
      if (item[0] === "STR") {
        emailBody += item[1];
      } else if (item[0] === "VAR") {
        emailBody += emailVars[item[1]];
      } else if (item[0] === "BR") {
        emailBody += "\n";
      }
    }

    const mailToLink = mailtoLink({
      to: letterTemplate.EMAIL_TO[emailVars['representative name']],
      subject: 'subject goes here',
      body: emailBody
    });

    setEmailVars({ ...emailVars, ["emailBody"]: emailBody, ["mailToLink"]: mailToLink });

    window.open(mailToLink);
  };

  return (
    <MainWrapper tabTitle="Action">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">Email Local Reps</h1>

      {/* <div role="tablist" className="tabs tabs-bordered mb-4">
        <a role="tab" className="tab">Tab 1</a>
        <a role="tab" className="tab tab-active">Tab 2</a>
        <a role="tab" className="tab">Tab 3</a>
      </div> */}
      
      <div className="card bg-base-200 max-w-3xl">
        <form className="card-body" onSubmit={(event) => createMailTo(event)}>
          <p className="text-left">
            {
              letterTemplate.TEMPLATE.map((item, index) => {
                if (item[0] === "STR") {
                  return <span key={index} className="inline">{item[1]}</span>;
                } else if (item[0] === "VAR") {
                  if (letterTemplate.VARS[item[1]].TYPE === "DD") {
                    return <select
                      key={index}
                      className="select select-primary select-xs inline w-40"
                      onChange={(e) => setEmailVars({ ...emailVars, [item[1]]: e.target.value })}
                      value={(emailVars[item[1]] || '')}
                      required
                    >
                      <option disabled>{item[1]}</option>
                      {
                        letterTemplate.VARS[item[1]].OPTIONS.map((option, index) => {
                          return <option className="capitalize" key={index} value={option}>{option}</option>;
                        })
                      }
                    </select>;
                  } else if (letterTemplate.VARS[item[1]].TYPE === "TXT") {
                    return <input
                      key={index} placeholder={item[1]}
                      className="input input-primary input-xs inline w-40"
                      type="text"
                      onChange={(e) => setEmailVars({ ...emailVars, [item[1]]: e.target.value })}
                      value={emailVars[item[1]] || ''}
                      required
                    />;
                  }
                          
                } else if (item[0] === "BR") {
                  return <br key={index} />;
                }
              })
            }
          </p>
          <button type="submit" className="btn btn-primary text-center mt-5">Send</button>
        </form>
        
      </div>

    </MainWrapper>
  );
}

export default EmailReps;