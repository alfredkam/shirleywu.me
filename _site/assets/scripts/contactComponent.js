/** @jsx React.DOM */
$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

var Contact = React.createClass({
    render : function () {
        return (
            <div>
                <form id='contactForm' role='form'>
                    <div className="form-group">
                        <label for="name"> Name </label>
                        <input type="text" className="form-control" name="name" id="name" placeholder="Enter name"/>
                    </div>
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input type="email" className="form-control" name="email" id="email" placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label for="phone">Phone Number</label>
                        <input type="text" className="form-control" name="phone" id="phone" placeholder="Enter phone number (Optional) "/>
                    </div>
                    <div className="form-group">
                        <label for="subject">Subject</label>
                        <input type="text" className="form-control" name='subject' id="subject" placeholder="Enter Subject"/>
                    </div>
                    <div className="form-group">
                        <label for="message">Message</label>
                        <textarea className='form-control' rows='3' name='message' id='message' placeholder="Enter Message"></textarea>
                    </div>
                </form>
            </div>
        );
    }
});

var Component = React.createClass({
    handleClick : function (e) {
        bootbox.dialog({
            title : 'Contact',
            message : '<div id=\'contactBody\'></div>',
            buttons : {
                cancel : {
                    label : 'Cancel',
                    className : 'btn-danger',
                    callback : function () {

                    }
                },
                main : {
                    label : 'Send',
                    className : 'btn-success',
                    callback : function () {
                        var json = $('#contactForm').serializeObject();
                        $.ajax({
                          url : 'http://nerd.alfredkam.com/contact/me?api_key=FyuO1Fuy1',
                          data : json,
                          type : 'POST'
                        }).done(function (data) {
                            console.log(data);
                        });
                    }
                }
            }
        });
        React.renderComponent(
            <Contact />,
            document.getElementById('contactBody')
        );
    },
    render: function () {
        return (
            <div>
                <button id='contactBtn' onClick={this.handleClick} className='btn btn-primary'>Contact Me</button>
            </div>
        );
    }
});

React.renderComponent(
    <Component />,
    document.getElementById('contactComponent')
);