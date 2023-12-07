package School.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import School.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.List;

/**
 * Entity implementation class for Entity: Запись
 */
@Entity(name = "IISSchoolЗапись")
@Table(schema = "public", name = "Запись")
public class Zapis {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "времяначало")
    private Integer времяначало;

    @Column(name = "Времяконца")
    private Integer времяконца;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Uslugi")
    @Convert("Uslugi")
    @Column(name = "Услуги", length = 16, unique = true, nullable = false)
    private UUID _uslugiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Uslugi", insertable = false, updatable = false)
    private Uslugi uslugi;

    @OneToMany(mappedBy = "zapis", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<klienty> klientys;


    public Zapis() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getвремяначало() {
      return времяначало;
    }

    public void setвремяначало(Integer времяначало) {
      this.времяначало = времяначало;
    }

    public Integer getВремяконца() {
      return времяконца;
    }

    public void setВремяконца(Integer времяконца) {
      this.времяконца = времяконца;
    }


}