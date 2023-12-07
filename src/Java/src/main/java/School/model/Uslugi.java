package School.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import School.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Услуги
 */
@Entity(name = "IISSchoolУслуги")
@Table(schema = "public", name = "Услуги")
public class Uslugi {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "стоимость")
    private Integer стоимость;

    @Column(name = "время")
    private Integer время;

    @Column(name = "услуга")
    private String услуга;


    public Uslugi() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getстоимость() {
      return стоимость;
    }

    public void setстоимость(Integer стоимость) {
      this.стоимость = стоимость;
    }

    public Integer getвремя() {
      return время;
    }

    public void setвремя(Integer время) {
      this.время = время;
    }

    public String getуслуга() {
      return услуга;
    }

    public void setуслуга(String услуга) {
      this.услуга = услуга;
    }


}