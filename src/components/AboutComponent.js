import React from "react";
import styles from "../Styles/ComponentStyles/about.module.css";
import Image from "../images/bruce.png";

const AboutComponent = () => {
  return (
    <div className={styles.main_about_container}>
      <div className={styles.about_wrapper}>
        <p className={styles.title}>Our Story</p>
        <img src={Image} alt="" className={styles.image} />
        <section className={styles.body_wrapper}>
          <p className={styles.text}>
            Here you can put something about you and tammy. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Arcu vitae elementum
            curabitur vitae nunc sed velit dignissim sodales. Proin sed libero
            enim sed faucibus turpis. Diam quis enim lobortis scelerisque
            fermentum dui faucibus in. Felis eget velit aliquet sagittis.
            Iaculis at erat pellentesque adipiscing. Aliquet lectus proin nibh
            nisl condimentum id. Est ante in nibh mauris cursus mattis molestie.
            Viverra orci sagittis eu volutpat odio. Sem nulla pharetra diam sit.
            Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget.
            Maecenas ultricies mi eget mauris. Magna fringilla urna porttitor
            rhoncus dolor purus non. Sagittis vitae et leo duis ut diam. Eros in
            cursus turpis massa tincidunt dui ut ornare. Tincidunt arcu non
            sodales neque sodales. Pretium viverra suspendisse potenti nullam ac
            tortor vitae purus faucibus. Nibh praesent tristique magna sit amet
            purus. Sollicitudin tempor id eu nisl. Eu lobortis elementum nibh
            tellus molestie. Massa enim nec dui nunc mattis enim ut tellus. Sed
            odio morbi quis commodo odio aenean sed adipiscing. Arcu non odio
            euismod lacinia at quis risus sed vulputate. Sem et tortor consequat
            id porta nibh venenatis. Aliquet porttitor lacus luctus accumsan
            tortor posuere ac ut. Faucibus ornare suspendisse sed nisi. Lacus
            sed turpis tincidunt id aliquet. Pellentesque elit eget gravida cum
            sociis natoque penatibus et. Odio aenean sed adipiscing diam donec
            adipiscing tristique risus nec. Gravida neque convallis a cras
            semper. Sed vulputate odio ut enim blandit volutpat. Tincidunt arcu
            non sodales neque sodales. Diam sit amet nisl suscipit adipiscing
            bibendum. Commodo nulla facilisi nullam vehicula ipsum. Diam
            phasellus vestibulum lorem sed risus ultricies. Bibendum neque
            egestas congue quisque egestas diam. Gravida quis blandit turpis
            cursus in hac. Nunc pulvinar sapien et ligula ullamcorper. Porttitor
            massa id neque aliquam vestibulum morbi. Volutpat odio facilisis
            mauris sit amet. Est sit amet facilisis magna etiam. Dictum at
            tempor commodo ullamcorper a lacus vestibulum sed. Diam maecenas
            ultricies mi eget mauris. Aliquam malesuada bibendum arcu vitae
            elementum curabitur vitae. Gravida quis blandit turpis cursus in hac
            habitasse platea. Aliquet risus feugiat in ante metus dictum at.
            Egestas tellus rutrum tellus pellentesque eu. Sem et tortor
            consequat id porta. Duis at tellus at urna condimentum mattis
            pellentesque. Suspendisse sed nisi lacus sed viverra. Vel pretium
            lectus quam id leo. Tortor id aliquet lectus proin nibh.
            Pellentesque elit ullamcorper dignissim cras tincidunt lobortis.
            Quam pellentesque nec nam aliquam sem et. Ornare suspendisse sed
            nisi lacus sed viverra tellus in hac. In ante metus dictum at tempor
            commodo ullamcorper a. Gravida arcu ac tortor dignissim convallis
            aenean et tortor at. Commodo nulla facilisi nullam vehicula ipsum.
            Vivamus arcu felis bibendum ut tristique et egestas quis. Vitae
            proin sagittis nisl rhoncus mattis. Vitae suscipit tellus mauris a
            diam maecenas sed. Cras semper auctor neque vitae. Accumsan tortor
            posuere ac ut consequat semper. Enim blandit volutpat maecenas
            volutpat blandit aliquam etiam. Non pulvinar neque laoreet
            suspendisse interdum consectetur libero id. Egestas diam in arcu
            cursus euismod quis viverra nibh cras. Et pharetra pharetra massa
            massa ultricies mi quis. Habitant morbi tristique senectus et netus
            et malesuada fames. Augue mauris augue neque gravida in fermentum et
            sollicitudin ac. Sed risus pretium quam vulputate dignissim
            suspendisse in est. Aliquam eleifend mi in nulla posuere
            sollicitudin.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutComponent;
