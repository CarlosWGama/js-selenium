import './../assets/css/main.css';
import './../assets/css/bootstrap.min.css';

export function MainLayout(props) {
    return (
        <div id="container">
            <section id="main">
                {props.children}
            </section>
        </div>
    )
}